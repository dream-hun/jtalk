import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
    Bold,
    Italic,
    UnderlineIcon,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Quote,
    Minus,
    Link2,
    Undo,
    Redo,
    FileUp,
} from 'lucide-react';
import { marked } from 'marked';
import { useRef } from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Toggle } from '@/components/ui/toggle';

function ToolbarButton({
    onClick,
    active,
    title,
    children,
}: {
    onClick: () => void;
    active?: boolean;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Toggle size="sm" pressed={active} onPressedChange={onClick} title={title} type="button">
            {children}
        </Toggle>
    );
}

export function RichTextEditor({
    name,
    defaultValue,
    error,
    placeholder = 'Write your post…',
}: {
    name: string;
    defaultValue?: string;
    error?: string;
    placeholder?: string;
}) {
    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const markdownInputRef = useRef<HTMLInputElement>(null);

    const syncHiddenInput = (editor: ReturnType<typeof useEditor>) => {
        if (hiddenInputRef.current && editor) {
            hiddenInputRef.current.value = editor.isEmpty ? '' : editor.getHTML();
        }
    };

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link.configure({ openOnClick: false }),
            Placeholder.configure({ placeholder }),
        ],
        content: defaultValue ?? '',
        onCreate: ({ editor }) => syncHiddenInput(editor),
        onUpdate: ({ editor }) => syncHiddenInput(editor),
    });

    function handleMarkdownImport(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !editor) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const markdown = event.target?.result as string;
            const html = marked(markdown) as string;
            editor.commands.setContent(html);
            syncHiddenInput(editor);
        };
        reader.readAsText(file);
        e.target.value = '';
    }

    function setLink() {
        if (!editor) {
return;
}

        const prev = editor.getAttributes('link').href as string | undefined;
        const url = window.prompt('URL', prev ?? '');

        if (url === null) {
return;
}

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
        } else {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }
    }

    return (
        <div className="grid gap-2">
            <input type="hidden" name={name} ref={hiddenInputRef} />

            <div className="rounded-md border border-input bg-transparent shadow-sm focus-within:ring-1 focus-within:ring-ring">
                <div className="flex flex-wrap items-center gap-0.5 border-b border-input px-2 py-1.5">
                    <ToolbarButton
                        title="Bold"
                        active={editor?.isActive('bold')}
                        onClick={() => editor?.chain().focus().toggleBold().run()}
                    >
                        <Bold className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Italic"
                        active={editor?.isActive('italic')}
                        onClick={() => editor?.chain().focus().toggleItalic().run()}
                    >
                        <Italic className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Underline"
                        active={editor?.isActive('underline')}
                        onClick={() => editor?.chain().focus().toggleUnderline().run()}
                    >
                        <UnderlineIcon className="size-3.5" />
                    </ToolbarButton>

                    <Separator orientation="vertical" className="mx-1 h-5" />

                    <ToolbarButton
                        title="Heading 2"
                        active={editor?.isActive('heading', { level: 2 })}
                        onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    >
                        <Heading2 className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Heading 3"
                        active={editor?.isActive('heading', { level: 3 })}
                        onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                    >
                        <Heading3 className="size-3.5" />
                    </ToolbarButton>

                    <Separator orientation="vertical" className="mx-1 h-5" />

                    <ToolbarButton
                        title="Bullet list"
                        active={editor?.isActive('bulletList')}
                        onClick={() => editor?.chain().focus().toggleBulletList().run()}
                    >
                        <List className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Ordered list"
                        active={editor?.isActive('orderedList')}
                        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                    >
                        <ListOrdered className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Blockquote"
                        active={editor?.isActive('blockquote')}
                        onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                    >
                        <Quote className="size-3.5" />
                    </ToolbarButton>
                    <ToolbarButton
                        title="Horizontal rule"
                        onClick={() => editor?.chain().focus().setHorizontalRule().run()}
                    >
                        <Minus className="size-3.5" />
                    </ToolbarButton>

                    <Separator orientation="vertical" className="mx-1 h-5" />

                    <ToolbarButton title="Link" active={editor?.isActive('link')} onClick={setLink}>
                        <Link2 className="size-3.5" />
                    </ToolbarButton>

                    <Separator orientation="vertical" className="mx-1 h-5" />

                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        title="Undo"
                        className="h-7 w-7 p-0"
                        onClick={() => editor?.chain().focus().undo().run()}
                        disabled={!editor?.can().undo()}
                    >
                        <Undo className="size-3.5" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        title="Redo"
                        className="h-7 w-7 p-0"
                        onClick={() => editor?.chain().focus().redo().run()}
                        disabled={!editor?.can().redo()}
                    >
                        <Redo className="size-3.5" />
                    </Button>

                    <Separator orientation="vertical" className="mx-1 h-5" />

                    <ToolbarButton title="Import Markdown" onClick={() => markdownInputRef.current?.click()}>
                        <FileUp className="size-3.5" />
                    </ToolbarButton>
                    <input
                        ref={markdownInputRef}
                        type="file"
                        accept=".md"
                        className="sr-only"
                        onChange={handleMarkdownImport}
                    />
                </div>

                <EditorContent
                    editor={editor}
                    className="prose prose-sm dark:prose-invert max-w-full min-h-64 px-3 py-2 text-sm focus-within:outline-none [&_.tiptap]:min-h-64 [&_.tiptap]:outline-none [&_.tiptap_p.is-editor-empty:first-child::before]:text-muted-foreground [&_.tiptap_p.is-editor-empty:first-child::before]:float-left [&_.tiptap_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.tiptap_p.is-editor-empty:first-child::before]:pointer-events-none"
                />
            </div>

            <InputError message={error} />
        </div>
    );
}

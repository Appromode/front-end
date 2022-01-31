import React, {
  useCallback,
  useMemo,
  useState,
  FC,
  Ref,
  PropsWithChildren,
} from 'react';
import isHotkey from 'is-hotkey';
import {
  Editable,
  withReact,
  useSlate,
  Slate,
} from 'slate-react';
import Image from 'next/image';
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
  BaseEditor,
} from 'slate';
import { withHistory } from 'slate-history';
import { cx, css } from '@emotion/css';
import styles from './styles.module.scss';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

interface BaseProps {
  className: string;
  data: any[];
  [key: string]: unknown;
}
type OrNull<T> = T | null

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

const TextEditor:FC<BaseProps> = ({ data }) => {
  const Leaf = ({ attributes, children, leaf } :
    {attributes: any, children: any, leaf: any}) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }
    if (leaf.code) {
      children = <code>{children}</code>;
    }
    if (leaf.italic) {
      children = <em>{children}</em>;
    }
    if (leaf.underline) {
      children = <u>{children}</u>;
    }
    return <span {...attributes}>{children}</span>;
  };

  const Element = ({ attributes, children, element } :
    {attributes: any, children: any, element: any}) => {
    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [
        { text: 'This is editable, ' },
        { text: 'please use this box', bold: true },
        { text: ' to enter your' },
        { text: ' reply!', italic: true },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'You can do things like turn a selection of text ',
        },
        { text: 'bold', bold: true },
        {
          text:
            ', or add semantically rendered code in the middle of the page, like this:',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '<Pop your code in here>', code: true,
        },
      ],
    },
  ];

  const Button = React.forwardRef(
    (
      {
        className,
        active,
        reversed,
        ...props
      }: PropsWithChildren<
        {
          active: boolean
          reversed: boolean
        } & BaseProps
      >,
      ref: Ref<OrNull<HTMLSpanElement>>,
    ) => (
      <span
        {...props}
        ref={ref}
        className={cx(
          className,
          css`
            cursor: pointer;
            color: ${reversed
            ? active
              ? 'white'
              : '#aaa'
            : active
              ? 'black'
              : '#ccc'};
          `,
        )}
      />
    ),
  );

  const isMarkActive = (editor: BaseEditor, format: string | number) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const isBlockActive = (editor: BaseEditor, format: any) => {
    const { selection } = editor;
    if (!selection) return false;
    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
      }),
    );
    return !!match;
  };

  const toggleBlock = (editor: BaseEditor, format: string) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);
    Transforms.unwrapNodes(editor, {
      match: (n) => !Editor.isEditor(n)
        && SlateElement.isElement(n)
        && LIST_TYPES.includes(n.type),
      split: true,
    });
    const newProperties: Partial<SlateElement> = {
      type: isActive ? 'paragraph'
        : isList ? 'list-item' : format,
    };
    Transforms.setNodes<SlateElement>(editor, newProperties);
    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  const toggleMark = (editor: BaseEditor, format: string) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const CodeButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isMarkActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleMark(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/code-icon.svg"
            width={15}
            height={15}
          />
        </Button>
      </div>
    );
  };

  const BoldButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isMarkActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleMark(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/bold-icon.svg"
            width={15}
            height={15}
          />
        </Button>
      </div>
    );
  };

  const ItalicButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isMarkActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleMark(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/italic-icon.svg"
            width={15}
            height={15}
          />
        </Button>
      </div>
    );
  };

  const UnderlineButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isMarkActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleMark(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/underline-icon.svg"
            width={15}
            height={17}
          />
        </Button>
      </div>
    );
  };

  const HeadOneButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isBlockActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleBlock(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/head1-icon.svg"
            width={15}
            height={17}
          />
        </Button>
      </div>
    );
  };

  const HeadTwoButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isBlockActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleBlock(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/head2-icon.svg"
            width={15}
            height={17}
          />
        </Button>
      </div>
    );
  };

  const NumberedButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isBlockActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleBlock(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/number-icon.svg"
            width={20}
            height={17}
          />
        </Button>
      </div>
    );
  };

  const BulletedButton = ({ format } : {format: any }) => {
    const editor = useSlate();
    return (
      <div className={styles.buttons}>
        <Button
          active={isBlockActive(editor, format)}
          onMouseDown={(event: { preventDefault: () => void; }) => {
            event.preventDefault();
            toggleBlock(editor, format);
          }}
          className={styles.buttons}
        >
          <Image
            src="/bulleted-list-icon.svg"
            width={20}
            height={17}
          />
        </Button>
      </div>
    );
  };

  const [value, setValue] = useState<Descendant[]>(initialValue);
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const userId = data.map((a) => a.id);
  const quotedText = data.map((a) => a.quote);
  const QuoteNull = () => (
    data.length > 0 && (
      <div className={styles.quotedText}>
        <div className={styles.userId}>
          {userId}
          {': '}
        </div>
        <div>
          {quotedText}
        </div>
      </div>
    )
  );

  return (
    <Slate editor={editor} value={value} onChange={() => setValue(value)}>
      <div className={styles.buttonContainer}>
        <BoldButton format="bold" />
        <ItalicButton format="italic" />
        <UnderlineButton format="underline" />
        <CodeButton format="code" />
        <HeadOneButton format="heading-one" />
        <HeadTwoButton format="heading-two" />
        <NumberedButton format="numbered-list" />
        <BulletedButton format="bulleted-list" />
      </div>
      <QuoteNull />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          Object.keys(HOTKEYS).forEach((hotkey) => {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          });
        }}
      />
    </Slate>
  );
};

export default TextEditor;
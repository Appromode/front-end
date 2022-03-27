import React, { FC } from 'react';
import {
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import {
  BoldExtension,
  CodeExtension,
  ItalicExtension,
  BulletListExtension,
  UnderlineExtension,
  HeadingExtension,
  OrderedListExtension,
} from 'remirror/extensions';
import { htmlToProsemirrorNode, prosemirrorNodeToHtml } from 'remirror';
import Image from 'next/image';
import {
  useRemirror,
  Remirror,
  EditorComponent,
  useCommands,
} from '@remirror/react';
import styles from './styles.module.scss';

const Menu = () => {
  const {
    toggleBold,
    toggleItalic,
    focus,
    toggleUnderline,
    toggleCode,
    toggleHeading,
    toggleOrderedList,
    toggleBulletList,
  } = useCommands();
  return (
    <div className={styles.toolbar}>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleBold();
            focus();
          }}
        >
          <Image
            src="/bold-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleItalic();
            focus();
          }}
        >
          <Image
            src="/italic-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleUnderline();
            focus();
          }}
        >
          <Image
            src="/underline-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleCode();
            focus();
          }}
        >
          <Image
            src="/code-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleHeading({ level: 1 });
            focus();
          }}
        >
          <Image
            src="/head1-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleHeading({ level: 3 });
            focus();
          }}
        >
          <Image
            src="/head2-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleOrderedList();
            focus();
          }}
        >
          <Image
            src="/number-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => {
            toggleBulletList();
            focus();
          }}
        >
          <Image
            src="/bulleted-list-icon.svg"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
};

interface EditorProps {
  data?: any[];
  removeItem?: any;
  parentCallback?: any;
}

const Editor: FC<EditorProps> = ({ data, removeItem, parentCallback }) => {
  const { manager, state, setState } = useRemirror({
    extensions: () => [
      new BoldExtension({ weight: 300 }),
      new ItalicExtension(),
      new BulletListExtension({ enableSpine: false }),
      new UnderlineExtension(),
      new CodeExtension(),
      new HeadingExtension(1),
      new OrderedListExtension()],
    content: '<p>This is editable, <b>please use this box</b> to type up your <em>post!</em></p>'
    + '<p>You can do things like turn a selection of text <b>bold</b>, or add semantically rendered code to the page, like this:</p>'
    + '<p><code spellcheck="false"> < Pop your code here > </code></p>',
    stringHandler: htmlToProsemirrorNode,
  });
  const htmlString = prosemirrorNodeToHtml(state.doc);
  const userId = data.map((a) => a.id);
  const quotedText = data.map((a) => a.quote);
  const createMarkupQuotedComment = () => (
    { __html: quotedText.toString() }
  );
  const onTrigger = () => {
    parentCallback(htmlString);
  };
  const QuoteNull = () => (
    data.length > 0 && (
      <Row className={styles.quotedText}>
        <Col md={11}>
          <div className={styles.userId}>
            {userId}
            {': '}
          </div>
          <div>
            <div dangerouslySetInnerHTML={createMarkupQuotedComment()} />
          </div>
        </Col>
        <Col md={1} className="flex justify-center align-center">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => (
              <Tooltip id="button-tooltip" {...props}>
                Remove quote
              </Tooltip>
            )}
          >
            <button
              type="button"
              className="bg-[#05345C] hover:bg-[#6B87BB] leading-none px-2 rounded-md border border-transparent"
              onClick={() => removeItem(0)}
            >
              <Image
                src="/x-icon.svg"
                width={30}
                height={30}
              />
            </button>
          </OverlayTrigger>
        </Col>
      </Row>
    )
  );

  return (
    <div>
      <Remirror
        manager={manager}
        initialContent={state}
        onChange={(paremeter) => {
          setState(paremeter.state);
          onTrigger();
        }}
      >
        <Menu />
        <QuoteNull />
        <EditorComponent />
      </Remirror>
    </div>
  );
};

Editor.defaultProps = {
  data: [],
  removeItem: 0,
  parentCallback: '',
};

export default Editor;

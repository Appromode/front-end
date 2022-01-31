import React, { FC } from 'react';
import {
  BoldExtension,
  ItalicExtension,
  BulletListExtension,
} from 'remirror/extensions';
import {
  useRemirror,
  Remirror,
  EditorComponent,
  useCommands,
} from '@remirror/react';

const Menu = () => {
  const { toggleBold, focus, toggleBulletList } = useCommands();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          toggleBold();
          focus();
        }}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => {
          toggleBulletList();
          focus();
        }}
      >
        Italic
      </button>
    </div>
  );
};

const Editor: FC = () => {
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension({ weight: 300 }),
      new ItalicExtension(),
      new BulletListExtension({ enableSpine: false })],
  });

  return (
    <div>
      <Remirror manager={manager} initialContent={state}>
        <Menu />
        <EditorComponent />
      </Remirror>
    </div>
  );
};

export default Editor;

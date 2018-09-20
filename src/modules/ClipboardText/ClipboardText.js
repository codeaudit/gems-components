import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import ClipboardButton from '../../components/ClipboardButton';

import styles from './ClipboardText.module.styl';

export default class ClipboardText extends Component {
  static propTypes = {
    text: PropTypes.string,
    label: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    text: '',
  };

  static module = {
    type: 'clipboardText',
    editor: {
      defaults: {
        text: 'Click to copy text',
      },
    },
  };

  render() {
    const { text, label } = this.props;
    return (
      <Label className={styles.label} label={label}>
        <div className={styles.container}>
          <div className={styles.content}>{text}</div>
          <ClipboardButton value={text} className={styles.copy}>
            Copy
          </ClipboardButton>
        </div>
      </Label>
    );
  }
}
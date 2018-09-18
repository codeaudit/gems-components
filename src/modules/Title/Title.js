import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './Title.module.styl';

export default class Title extends Component {
  static propTypes = {
    className: PropTypes.string,
    centered: PropTypes.bool,
    title: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    title: '',
    centered: false,
  };

  static module = {
    type: 'title',
    editor: {
      defaults: {
        title: 'some title',
      },
    },
  };

  render() {
    const { title, centered, className } = this.props;
    const classes = cn(
      styles.title,
      { [styles.centered]: centered },
      className
    );
    return (
      <div className={classes} dangerouslySetInnerHTML={{ __html: title }} />
    );
  }
}

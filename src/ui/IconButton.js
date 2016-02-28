/* @flow */

import React, {Component} from 'react';
import cx from 'classnames';
import Button from './Button';

type Props = {
  className: ?string;
  iconName: string;
  label: string;
};

export default class IconButton extends Component<Props> {
  props: Props;

  render(): React.Element {
    let {props} = this;
    let {className, iconName, label, ...otherProps} = props;
    className = cx(className, 'ui-icon-button');
    return (
      <Button {...otherProps} title={label} className={className}>
        <span className={'icon ' + iconName} />
        {/* TODO: add text label here with aria-hidden */}
      </Button>
    );
  }
}
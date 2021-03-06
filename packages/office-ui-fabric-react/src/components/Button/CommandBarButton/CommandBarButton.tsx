import * as React from 'react';
import { BaseButton } from '../BaseButton';
import { BaseComponent, customizable, nullRender } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
import { getStyles } from './CommandBarButton.styles';

@customizable('CommandBarButton', ['theme'])
export class CommandBarButton extends BaseComponent<IButtonProps, {}> {
  /**
   * Tell BaseComponent to bypass resolution of componentRef.
   */
  protected _shouldUpdateComponentRef = false;

  public render() {
    const { styles, theme } = this.props;

    return (
      <BaseButton
        { ...this.props }
        variantClassName='ms-Button--commandBar'
        styles={ getStyles(theme!, styles) }
        onRenderDescription={ nullRender }
      />
    );
  }
}
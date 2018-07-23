import {
    Component,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
} from '@angular/core';

import { NgaButtonConfig } from './button-config';

/**
 * Alerts can be used to provide feedback messages.
 */
@Component({
    selector: 'nga-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <button [class]="'a-btn a-btn-' + type" (click)="clickHandler()">
        <i [class]="'a-icon appkit-icon-image-fill'+''"></i>
        {{label}}
      <ng-content></ng-content>
    </button>
    <div *ngIf="showicon">test ng if</div>
    `
})
export class NgaButton {
    /**
     * A flag indicating if a given alert can be dismissed (closed) by a user. If this flag is set, a close button (in a
     * form of an ×) will be displayed.
     */
    @Input() showicon: boolean;
    /**
     * Alert type (CSS class). Bootstrap 4 recognizes the following types: "success", "info", "warning", "danger",
     * "primary", "secondary", "light", "dark".
     */
    @Input() type: string;

    @Input() label: string;
    /**
     * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
     */
    @Output() click = new EventEmitter();

    constructor(config: NgaButtonConfig) {
        // this.showicon = config.showicon;
        this.type = config.type;
    }

    clickHandler() {
        this.showicon = !this.showicon;
        this.click.emit(null);
    }
}
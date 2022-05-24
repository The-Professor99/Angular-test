import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDnd]',
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<Array<File>>();

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public ondrop(evt: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { files: any; items: any };
  }) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;

    const { dataTransfer } = evt;

    if (dataTransfer.items) {
      const files = [];
      for (let i = 0; i < dataTransfer.items.length; i++) {
        if (dataTransfer.items[i].kind === 'file' && dataTransfer.items[i].type.startsWith('image')) {
          files.push(dataTransfer.items[i].getAsFile());
        }
      }
      dataTransfer.items.clear();
      if (files.length > 0) {
        this.fileDropped.emit(files);
      }
    } else {
      const files = dataTransfer.files;
      if (files.length > 0) {
        const file_type = files[0].type
        if (file_type.startsWith('image')) {
          this.fileDropped.emit(files);
        }
      }
    }
  }
}

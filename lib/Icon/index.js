import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import caretSVG from '../../assets/icons/caret.svg';
import caretUpSVG from '../../assets/icons/caret-up.svg';
import cogSVG from '../../assets/icons/cog.svg';
import plusSVG from '../../assets/icons/plus.svg';
import menuSVG from '../../assets/icons/menu.svg';
import loaderSVG from './../../assets/icons/loader.svg';
import tickSVG from './../../assets/icons/tick.svg';
import menuDottedSVG from './../../assets/icons/menu-dotted.svg';
import backArrowSVG from './../../assets/icons/back-arrow.svg';
import pencilSVG from './../../assets/icons/pencil.svg';
import uploadSVG from './../../assets/icons/upload.svg';
import trashSVG from './../../assets/icons/trash.svg';
import fullScreenSVG from './../../assets/icons/fullscreen.svg';
import downloadSVG from './../../assets/icons/download.svg';
import personSVG from './../../assets/icons/person.svg';
import keyboardSVG from './../../assets/icons/keyboard.svg';
import closeSVG from './../../assets/icons/close.svg';
import externalLinkSVG from './../../assets/icons/external-link.svg';
import attachmentSVG from './../../assets/icons/attachment.svg';
import checkboxSVG from './../../assets/icons/checkbox.svg';
import guidelineSVG from './../../assets/icons/guideline.svg';
import radioSVG from './../../assets/icons/radio.svg';
import textSVG from './../../assets/icons/text.svg';
import upSVG from './../../assets/icons/up.svg';
import downSVG from './../../assets/icons/down.svg';
import crossSVG from './../../assets/icons/cross.svg';
import clockSVG from './../../assets/icons/clock.svg';
import warningSVG from './../../assets/icons/warning.svg';
import dragHandleSVG from '../../assets/icons/drag-handle.svg';
import bulletListSVG from '../../assets/icons/bulletlist.svg';
import numberedListSVG from '../../assets/icons/numberedlist.svg';
import tableSVG from '../../assets/icons/table.svg';
import quoteSVG from '../../assets/icons/quote.svg';
import helpSVG from '../../assets/icons/help.svg';
import infoSVG from '../../assets/icons/info.svg';
import lockSVG from '../../assets/icons/lock.svg';
import searchSVG from '../../assets/icons/search.svg';
import cancelSVG from '../../assets/icons/cancel.svg';
import noteSVG from '../../assets/icons/note.svg';
import addPersonSVG from '../../assets/icons/add-person.svg';
import boldTickSVG from '../../assets/icons/bold-tick.svg';
import bellSVG from '../../assets/icons/bell.svg';
import saveSVG from '../../assets/icons/save.svg';
import archiveSVG from '../../assets/icons/archive.svg';
import calendarSVG from '../../assets/icons/calendar.svg';
import contentMapSVG from '../../assets/icons/content-map.svg';
import exportSVG from '../../assets/icons/export.svg';
import filesSVG from '../../assets/icons/files.svg';
import gridSVG from '../../assets/icons/grid.svg';
import listSVG from '../../assets/icons/list.svg';
import itemsSVG from '../../assets/icons/items.svg';
import templateSVG from '../../assets/icons/template.svg';

/**
 * @usage
 *
 * <Icon name="comment" size="small" />
 */
const getIcon = name => {
  const icons = {
    comment: commentSVG,
    plusCircle: plusCircleSVG,
    plus: plusSVG,
    caretUp: caretUpSVG,
    caret: caretSVG,
    cog: cogSVG,
    menu: menuSVG,
    menuDotted: menuDottedSVG,
    loader: loaderSVG,
    tick: tickSVG,
    backArrow: backArrowSVG,
    pencil: pencilSVG,
    upload: uploadSVG,
    trash: trashSVG,
    fullScreen: fullScreenSVG,
    download: downloadSVG,
    person: personSVG,
    keyboard: keyboardSVG,
    close: closeSVG,
    externalLink: externalLinkSVG,
    attachment: attachmentSVG,
    checkbox: checkboxSVG,
    guideline: guidelineSVG,
    radio: radioSVG,
    text: textSVG,
    up: upSVG,
    down: downSVG,
    cross: crossSVG,
    clock: clockSVG,
    warning: warningSVG,
    dragHandle: dragHandleSVG,
    bulletList: bulletListSVG,
    numberedList: numberedListSVG,
    table: tableSVG,
    quote: quoteSVG,
    help: helpSVG,
    lock: lockSVG,
    info: infoSVG,
    search: searchSVG,
    cancel: cancelSVG,
    note: noteSVG,
    addPerson: addPersonSVG,
    boldTick: boldTickSVG,
    bell: bellSVG,
    save: saveSVG,
    archive: archiveSVG,
    calendar: calendarSVG,
    contentMap: contentMapSVG,
    export: exportSVG,
    files: filesSVG,
    grid: gridSVG,
    list: listSVG,
    items: itemsSVG,
    template: templateSVG
  };
  return icons[name] ? icons[name] : () => null;
};

const Icon = props => {
  const icon = getIcon(props.name)();
  const classNames = cx(props.className, {
    'icon--hide-text': props.hideText,
    'icon--has-notification': props.notification
  });

  if (!icon) {
    console.warn(`The ${props.name} icon does not exist in this library`);
    return null;
  }

  return (
    <span className={`icon icon--${props.name} ${classNames}`}>
      {props.notification && (
        <span className="icon__notification">{props.notification}</span>
      )}
      <span className="icon__body">
        <span className="icon__image">{icon}</span>
        {props.text && <span className="icon__text">{props.text}</span>}
      </span>
    </span>
  );
};

Icon.defaultProps = {
  hideText: false,
  text: '',
  className: '',
  notification: ''
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  hideText: PropTypes.bool,
  notification: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Icon;

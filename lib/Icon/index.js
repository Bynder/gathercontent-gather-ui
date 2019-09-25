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
import loaderSVG from '../../assets/icons/loader.svg';
import tickSVG from '../../assets/icons/tick.svg';
import tickCircleSVG from '../../assets/icons/tick-circle.svg';
import emptyCircle from '../../assets/icons/empty.svg';
import menuDottedSVG from '../../assets/icons/menu-dotted.svg';
import backArrowSVG from '../../assets/icons/back-arrow.svg';
import backArrow2SVG from '../../assets/icons/back-arrow-2.svg';
import pencilSVG from '../../assets/icons/pencil.svg';
import uploadSVG from '../../assets/icons/upload.svg';
import trashSVG from '../../assets/icons/trash.svg';
import fullScreenSVG from '../../assets/icons/fullscreen.svg';
import downloadSVG from '../../assets/icons/download.svg';
import personSVG from '../../assets/icons/person.svg';
import keyboardSVG from '../../assets/icons/keyboard.svg';
import closeSVG from '../../assets/icons/close.svg';
import externalLinkSVG from '../../assets/icons/external-link.svg';
import whiteLinkSVG from '../../assets/icons/link-white.svg';
import attachmentSVG from '../../assets/icons/attachment.svg';
import checkboxSVG from '../../assets/icons/checkbox.svg';
import guidelineSVG from '../../assets/icons/guideline.svg';
import radioSVG from '../../assets/icons/radio.svg';
import textSVG from '../../assets/icons/text.svg';
import upSVG from '../../assets/icons/up.svg';
import downSVG from '../../assets/icons/down.svg';
import crossSVG from '../../assets/icons/cross.svg';
import clockSVG from '../../assets/icons/clock.svg';
import warningSVG from '../../assets/icons/warning.svg';
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
import folderSVG from '../../assets/icons/folder.svg';
import chevronRightSVG from '../../assets/icons/chevron-right.svg';
import homeSVG from '../../assets/icons/home.svg';
import changeSVG from '../../assets/icons/change.svg';
import export2SVG from '../../assets/icons/export2.svg';
import folderGoSVG from '../../assets/icons/foldergo.svg';
import folderOpenSVG from '../../assets/icons/folderopen.svg';
import imageSVG from '../../assets/icons/image.svg';
import statusSVG from '../../assets/icons/status.svg';
import userSVG from '../../assets/icons/user.svg';
import folderNewSVG from '../../assets/icons/newfolder.svg';
import eyeSVG from '../../assets/icons/eye.svg';
import newWindowSVG from '../../assets/icons/new-window.svg';
import commentFillSVG from '../../assets/icons/comment-fill.svg';
import restoreSVG from '../../assets/icons/restore.svg';
import copyFillSVG from '../../assets/icons/copy-fill.svg';
import atSVG from '../../assets/icons/at.svg';
import quoteStart from '../../assets/icons/quoteStart.svg';
import embed from '../../assets/icons/embed.svg';
import peopleSVG from '../../assets/icons/people.svg';
import itemSVG from '../../assets/icons/item.svg';
import approvedSVG from '../../assets/icons/approved.svg';

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
    tickCircle: tickCircleSVG,
    emptyCircle,
    backArrow: backArrowSVG,
    backArrow2: backArrow2SVG,
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
    template: templateSVG,
    home: homeSVG,
    folder: folderSVG,
    chevronRight: chevronRightSVG,
    change: changeSVG,
    export2: export2SVG,
    folderGo: folderGoSVG,
    folderOpen: folderOpenSVG,
    image: imageSVG,
    status: statusSVG,
    user: userSVG,
    folderNew: folderNewSVG,
    newWindow: newWindowSVG,
    eye: eyeSVG,
    commentFill: commentFillSVG,
    restore: restoreSVG,
    copyFill: copyFillSVG,
    whiteLink: whiteLinkSVG,
    at: atSVG,
    quoteStart,
    embed,
    people: peopleSVG,
    item: itemSVG,
    approved: approvedSVG
  };
  return icons[name] ? icons[name] : () => null;
};

const createClassesFromTypesList = (types, prefix = 'icon--') =>
  types.reduce((className, type) => `${className} ${prefix}${type}`, '');

const Icon = props => {
  const icon = getIcon(props.name)();

  if (!icon) {
    console.warn(`The ${props.name} icon does not exist in this library`); // eslint-disable-line no-console
    return null;
  }

  const classNames = cx(
    props.className,
    createClassesFromTypesList(props.types),
    {
      'icon--hide-text': props.hideText,
      'icon--has-notification': props.notification
    }
  );

  const textClassNames = cx(
    'icon__text',
    createClassesFromTypesList(props.textTypes, 'icon__text--')
  );
  return (
    <span className={`icon icon--${props.name} ${classNames}`}>
      {props.notification && (
        <span className="icon__notification">{props.notification}</span>
      )}
      <span className="icon__body">
        <span className="icon__image">{icon}</span>
        {props.text && <span className={textClassNames}>{props.text}</span>}
      </span>
    </span>
  );
};

Icon.defaultProps = {
  hideText: false,
  text: '',
  className: '',
  notification: '',
  types: [],
  textTypes: []
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  hideText: PropTypes.bool,
  notification: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  types: PropTypes.arrayOf(PropTypes.string),
  textTypes: PropTypes.arrayOf(PropTypes.string)
};

export default Icon;

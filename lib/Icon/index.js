import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import cx from 'classnames';
import { createClassesFromTypesList } from '../helpers/classes';
import arrowDownSVG from '../../assets/icons/arrow-down.svg';
import arrowRightSVG from '../../assets/icons/arrow-right.svg';
import arrowUpSVG from '../../assets/icons/arrow-up.svg';
import commentSVG from '../../assets/icons/comment.svg';
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
import caretSVG from '../../assets/icons/caret.svg';
import caretUpSVG from '../../assets/icons/caret-up.svg';
import cogSVG from '../../assets/icons/cog.svg';
import plusSVG from '../../assets/icons/plusIcon16.svg';
import menuSVG from '../../assets/icons/menu.svg';
import loaderSVG from '../../assets/icons/loader.svg';
import loader16SVG from '../../assets/icons/loader16.svg';
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
import linkSVG from '../../assets/icons/link.svg';
import externalLinkSVG from '../../assets/icons/external-link.svg';
import whiteLinkSVG from '../../assets/icons/link-white.svg';
import attachmentSVG from '../../assets/icons/assetfield24.svg';
import checkboxSVG from '../../assets/icons/checkboxfield24.svg';
import guidelineSVG from '../../assets/icons/guidelinesfield24.svg';
import radioSVG from '../../assets/icons/radiobuttonfield24.svg';
import textSVG from '../../assets/icons/textfield24.svg';
import componentFieldSVG from '../../assets/icons/componentfield24.svg';
import upSVG from '../../assets/icons/up.svg';
import downSVG from '../../assets/icons/down.svg';
import crossSVG from '../../assets/icons/cross.svg';
import clockSVG from '../../assets/icons/clock.svg';
import warningSVG from '../../assets/icons/warning.svg';
import triangleWarningSVG from '../../assets/icons/triangle-warning.svg';
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
import boldTickSmallSVG from '../../assets/icons/bold-tick-small.svg';
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
import newItemSVG from '../../assets/icons/icon-new-item.svg';
import approvedSVG from '../../assets/icons/approved.svg';
import questionSVG from '../../assets/icons/question.svg';
import hierarchySVG from '../../assets/icons/hierarchy.svg';
import userInviteSVG from '../../assets/icons/userInvite.svg';
import bookSVG from '../../assets/icons/book.svg';
import userEditSVG from '../../assets/icons/user-edit.svg';
import keySVG from '../../assets/icons/key.svg';
import shareSVG from '../../assets/icons/share.svg';
import pencilFilledSVG from '../../assets/icons/pencil-filled.svg';
import sittingPersonSVG from '../../assets/icons/sitting-person.svg';
import upgradeBoltSVG from '../../assets/icons/upgrade-bolt.svg';
import warningTriangleSVG from '../../assets/icons/warning-triangle.svg';
import warningOctogonSVG from '../../assets/icons/warning-octogon.svg';
import infoSquareSVG from '../../assets/icons/info-square.svg';
import integrationSVG from '../../assets/icons/integration.svg';
import resolvedSVG from '../../assets/icons/resolve.svg';
import caption16 from '../../assets/icons/caption-16.svg';
import blockquote24 from '../../assets/icons/blockquote-24.svg';
import blockQuote16 from '../../assets/icons/formatting/blockquote-16.svg';
import bold16 from '../../assets/icons/formatting/bold-16.svg';
import clearFormatting16 from '../../assets/icons/formatting/clear-formatting-16.svg';
import comment16 from '../../assets/icons/formatting/comment-16.svg';
import h116 from '../../assets/icons/formatting/h1-16.svg';
import h216 from '../../assets/icons/formatting/h2-16.svg';
import h316 from '../../assets/icons/formatting/h3-16.svg';
import h416 from '../../assets/icons/formatting/h4-16.svg';
import h516 from '../../assets/icons/formatting/h5-16.svg';
import h616 from '../../assets/icons/formatting/h6-16.svg';
import indent16 from '../../assets/icons/formatting/indent-16.svg';
import orderedList16 from '../../assets/icons/formatting/orderedlist-16.svg';
import outdent16 from '../../assets/icons/formatting/outdent-16.svg';
import paragraph16 from '../../assets/icons/formatting/paragraph-16.svg';
import strikethrough16 from '../../assets/icons/formatting/strikethrough-16.svg';
import subscript16 from '../../assets/icons/formatting/subscript-16.svg';
import superscript16 from '../../assets/icons/formatting/superscript-16.svg';
import table16 from '../../assets/icons/formatting/table-16.svg';
import underline16 from '../../assets/icons/formatting/underline-16.svg';
import unorderedList16 from '../../assets/icons/formatting/unorderedlist-16.svg';
import italic16 from '../../assets/icons/formatting/italic-16.svg';
import link16 from '../../assets/icons/formatting/link-16.svg';
import caret16 from '../../assets/icons/caret-16.svg';
import newWindow16 from '../../assets/icons/newwindow16.svg';
import pen16 from '../../assets/icons/pen16.svg';
import clipboard16 from '../../assets/icons/clipboard16.svg';
import commentsMulti16 from '../../assets/icons/commentsMulti-16.svg';
import item16 from '../../assets/icons/item16.svg';
import newComment from '../../assets/icons/new-comment.svg';
import cog16 from '../../assets/icons/cog16.svg';
import danger16 from '../../assets/icons/danger16.svg';
import repeatable from '../../assets/icons/repeatable16.svg';
import plaintext from '../../assets/icons/plaintext16.svg';
import textlimit from '../../assets/icons/textlimit16.svg';
import otheroption from '../../assets/icons/otheroption16.svg';
import menu16 from '../../assets/icons/menu16.svg';
import code16 from '../../assets/icons/code16.svg';
import template16 from '../../assets/icons/template16.svg';
import component16 from '../../assets/icons/component16.svg';
import guidelines16 from '../../assets/icons/guidelines16.svg';
import radio16 from '../../assets/icons/radio16.svg';
import checkbox16 from '../../assets/icons/checkbox16.svg';
import asset16 from '../../assets/icons/asset16.svg';
import text16 from '../../assets/icons/text16.svg';
import bolt from '../../assets/icons/bolt.svg';
import unusedTemplate16 from '../../assets/icons/unused-templates.svg';
import addProject16 from '../../assets/icons/addprojects16.svg';
import activity16 from '../../assets/icons/activity16.svg';
import userGroup16 from '../../assets/icons/userGroup16.svg';
import todo16 from '../../assets/icons/todo16.svg';
import tick16 from '../../assets/icons/tick16.svg';
import settings16 from '../../assets/icons/settings16.svg';
import earth from '../../assets/icons/earth.svg';
import goto from '../../assets/icons/go-to16.svg';

/**
 * @usage
 *
 * <Icon name="comment" size="small" />
 */
const getIcon = name => {
  const icons = {
    arrowDown: arrowDownSVG,
    arrowRight: arrowRightSVG,
    arrowUp: arrowUpSVG,
    comment: commentSVG,
    plusCircle: plusCircleSVG,
    plus: plusSVG,
    caretUp: caretUpSVG,
    caret: caretSVG,
    cog: cogSVG,
    menu: menuSVG,
    menuDotted: menuDottedSVG,
    loader: loaderSVG,
    loader16: loader16SVG,
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
    componentField: componentFieldSVG,
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
    addItem: newItemSVG,
    boldTickSmall: boldTickSmallSVG,
    approved: approvedSVG,
    question: questionSVG,
    hierarchy: hierarchySVG,
    userInvite: userInviteSVG,
    book: bookSVG,
    userEdit: userEditSVG,
    key: keySVG,
    share: shareSVG,
    link: linkSVG,
    pencilFilled: pencilFilledSVG,
    triangleWarning: triangleWarningSVG,
    sittingPerson: sittingPersonSVG,
    upgradeBolt: upgradeBoltSVG,
    warningTriangle: warningTriangleSVG,
    warningOctogon: warningOctogonSVG,
    infoSquare: infoSquareSVG,
    resolved: resolvedSVG,
    integration: integrationSVG,
    caption16,
    blockquote24,
    blockQuote16,
    bold16,
    clearFormatting16,
    comment16,
    h116,
    h216,
    h316,
    h416,
    h516,
    h616,
    indent16,
    orderedList16,
    outdent16,
    paragraph16,
    strikethrough16,
    subscript16,
    superscript16,
    table16,
    underline16,
    unorderedList16,
    italic16,
    link16,
    caret16,
    newWindow16,
    pen16,
    clipboard16,
    commentsMulti16,
    item16,
    newComment,
    cog16,
    danger16,
    repeatable,
    plaintext,
    textlimit,
    otheroption,
    menu16,
    code16,
    template16,
    component16,
    bolt,
    unusedTemplate16,
    guidelines16,
    radio16,
    checkbox16,
    asset16,
    text16,
    addProject16,
    activity16,
    userGroup16,
    todo16,
    tick16,
    settings16,
    earth,
    goto
  };
  return icons[name] || null;
};

const Icon = props => {
  const IconComponent = getIcon(props.name);

  if (!IconComponent) {
    console.warn(`The ${props.name} icon does not exist in this library`); // eslint-disable-line no-console
    return null;
  }

  const svgParentRef = useRef(null);
  const titleId = `${props.name}-${uuid()}`;

  useEffect(() => {
    if (!props.title) {
      return;
    }
    const svgElement = svgParentRef.current.firstChild;

    const existingTitleElement = svgElement.getElementsByTagName('title')[0];
    if (existingTitleElement) {
      existingTitleElement.remove();
    }

    const titleElement = document.createElement('title');
    titleElement.innerHTML = props.title;
    titleElement.id = titleId;

    svgElement.insertBefore(titleElement, svgElement.firstChild);
  }, [props.title]);

  const classNames = cx(
    props.className,
    createClassesFromTypesList(props.types, 'icon--'),
    {
      'icon--hide-text': props.hideText,
      'icon--has-notification': props.notification,
      'icon--default-fill-color': props.defaultFillColor,
      'icon--default-active-color': props.defaultActiveColor
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
        <span ref={svgParentRef} className="icon__image">
          <IconComponent aria-labelledby={titleId} />
        </span>
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
  textTypes: [],
  title: null,
  defaultFillColor: true,
  defaultActiveColor: true
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  hideText: PropTypes.bool,
  notification: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  types: PropTypes.arrayOf(PropTypes.string),
  textTypes: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  defaultFillColor: PropTypes.bool,
  defaultActiveColor: PropTypes.bool
};

export default Icon;

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from 'uuid/v1';
import cx from 'classnames';
import { createClassesFromTypesList } from '../helpers/classes';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/arrow-down.... Remove this comment to see the full error message
import arrowDownSVG from '../../assets/icons/arrow-down.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/arrow-right... Remove this comment to see the full error message
import arrowRightSVG from '../../assets/icons/arrow-right.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/arrow-up.sv... Remove this comment to see the full error message
import arrowUpSVG from '../../assets/icons/arrow-up.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/comment.svg... Remove this comment to see the full error message
import commentSVG from '../../assets/icons/comment.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/plus-circle... Remove this comment to see the full error message
import plusCircleSVG from '../../assets/icons/plus-circle.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/caret.svg' ... Remove this comment to see the full error message
import caretSVG from '../../assets/icons/caret.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/caret-up.sv... Remove this comment to see the full error message
import caretUpSVG from '../../assets/icons/caret-up.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/cog.svg' or... Remove this comment to see the full error message
import cogSVG from '../../assets/icons/cog.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/plusIcon16.... Remove this comment to see the full error message
import plusSVG from '../../assets/icons/plusIcon16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/menu.svg' o... Remove this comment to see the full error message
import menuSVG from '../../assets/icons/menu.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/loader.svg'... Remove this comment to see the full error message
import loaderSVG from '../../assets/icons/loader.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/loader16.sv... Remove this comment to see the full error message
import loader16SVG from '../../assets/icons/loader16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/tick.svg' o... Remove this comment to see the full error message
import tickSVG from '../../assets/icons/tick.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/tick-circle... Remove this comment to see the full error message
import tickCircleSVG from '../../assets/icons/tick-circle.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/empty.svg' ... Remove this comment to see the full error message
import emptyCircle from '../../assets/icons/empty.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/menu-dotted... Remove this comment to see the full error message
import menuDottedSVG from '../../assets/icons/menu-dotted.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/back-arrow.... Remove this comment to see the full error message
import backArrowSVG from '../../assets/icons/back-arrow.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/back-arrow-... Remove this comment to see the full error message
import backArrow2SVG from '../../assets/icons/back-arrow-2.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/pencil.svg'... Remove this comment to see the full error message
import pencilSVG from '../../assets/icons/pencil.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/upload.svg'... Remove this comment to see the full error message
import uploadSVG from '../../assets/icons/upload.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/trash.svg' ... Remove this comment to see the full error message
import trashSVG from '../../assets/icons/trash.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/fullscreen.... Remove this comment to see the full error message
import fullScreenSVG from '../../assets/icons/fullscreen.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/download.sv... Remove this comment to see the full error message
import downloadSVG from '../../assets/icons/download.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/person.svg'... Remove this comment to see the full error message
import personSVG from '../../assets/icons/person.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/keyboard.sv... Remove this comment to see the full error message
import keyboardSVG from '../../assets/icons/keyboard.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/close.svg' ... Remove this comment to see the full error message
import closeSVG from '../../assets/icons/close.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/link.svg' o... Remove this comment to see the full error message
import linkSVG from '../../assets/icons/link.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/external-li... Remove this comment to see the full error message
import externalLinkSVG from '../../assets/icons/external-link.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/link-white.... Remove this comment to see the full error message
import whiteLinkSVG from '../../assets/icons/link-white.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/assetfield2... Remove this comment to see the full error message
import attachmentSVG from '../../assets/icons/assetfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/checkboxfie... Remove this comment to see the full error message
import checkboxSVG from '../../assets/icons/checkboxfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/guidelinesf... Remove this comment to see the full error message
import guidelineSVG from '../../assets/icons/guidelinesfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/radiobutton... Remove this comment to see the full error message
import radioSVG from '../../assets/icons/radiobuttonfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/textfield24... Remove this comment to see the full error message
import textSVG from '../../assets/icons/textfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/componentfi... Remove this comment to see the full error message
import componentFieldSVG from '../../assets/icons/componentfield24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/up.svg' or ... Remove this comment to see the full error message
import upSVG from '../../assets/icons/up.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/down.svg' o... Remove this comment to see the full error message
import downSVG from '../../assets/icons/down.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/cross.svg' ... Remove this comment to see the full error message
import crossSVG from '../../assets/icons/cross.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/clock.svg' ... Remove this comment to see the full error message
import clockSVG from '../../assets/icons/clock.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/warning.svg... Remove this comment to see the full error message
import warningSVG from '../../assets/icons/warning.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/triangle-wa... Remove this comment to see the full error message
import triangleWarningSVG from '../../assets/icons/triangle-warning.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/drag-handle... Remove this comment to see the full error message
import dragHandleSVG from '../../assets/icons/drag-handle.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bulletlist.... Remove this comment to see the full error message
import bulletListSVG from '../../assets/icons/bulletlist.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/numberedlis... Remove this comment to see the full error message
import numberedListSVG from '../../assets/icons/numberedlist.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/table.svg' ... Remove this comment to see the full error message
import tableSVG from '../../assets/icons/table.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/quote.svg' ... Remove this comment to see the full error message
import quoteSVG from '../../assets/icons/quote.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/help.svg' o... Remove this comment to see the full error message
import helpSVG from '../../assets/icons/help.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/info.svg' o... Remove this comment to see the full error message
import infoSVG from '../../assets/icons/info.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/lock.svg' o... Remove this comment to see the full error message
import lockSVG from '../../assets/icons/lock.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/search.svg'... Remove this comment to see the full error message
import searchSVG from '../../assets/icons/search.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/cancel.svg'... Remove this comment to see the full error message
import cancelSVG from '../../assets/icons/cancel.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/note.svg' o... Remove this comment to see the full error message
import noteSVG from '../../assets/icons/note.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/add-person.... Remove this comment to see the full error message
import addPersonSVG from '../../assets/icons/add-person.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bold-tick.s... Remove this comment to see the full error message
import boldTickSVG from '../../assets/icons/bold-tick.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bold-tick-s... Remove this comment to see the full error message
import boldTickSmallSVG from '../../assets/icons/bold-tick-small.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bell.svg' o... Remove this comment to see the full error message
import bellSVG from '../../assets/icons/bell.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/save.svg' o... Remove this comment to see the full error message
import saveSVG from '../../assets/icons/save.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/archive.svg... Remove this comment to see the full error message
import archiveSVG from '../../assets/icons/archive.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/calendar.sv... Remove this comment to see the full error message
import calendarSVG from '../../assets/icons/calendar.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/content-map... Remove this comment to see the full error message
import contentMapSVG from '../../assets/icons/content-map.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/export.svg'... Remove this comment to see the full error message
import exportSVG from '../../assets/icons/export.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/files.svg' ... Remove this comment to see the full error message
import filesSVG from '../../assets/icons/files.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/grid.svg' o... Remove this comment to see the full error message
import gridSVG from '../../assets/icons/grid.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/list.svg' o... Remove this comment to see the full error message
import listSVG from '../../assets/icons/list.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/items.svg' ... Remove this comment to see the full error message
import itemsSVG from '../../assets/icons/items.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/template.sv... Remove this comment to see the full error message
import templateSVG from '../../assets/icons/template.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/folder.svg'... Remove this comment to see the full error message
import folderSVG from '../../assets/icons/folder.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/chevron-rig... Remove this comment to see the full error message
import chevronRightSVG from '../../assets/icons/chevron-right.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/home.svg' o... Remove this comment to see the full error message
import homeSVG from '../../assets/icons/home.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/change.svg'... Remove this comment to see the full error message
import changeSVG from '../../assets/icons/change.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/export2.svg... Remove this comment to see the full error message
import export2SVG from '../../assets/icons/export2.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/foldergo.sv... Remove this comment to see the full error message
import folderGoSVG from '../../assets/icons/foldergo.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/folderopen.... Remove this comment to see the full error message
import folderOpenSVG from '../../assets/icons/folderopen.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/image.svg' ... Remove this comment to see the full error message
import imageSVG from '../../assets/icons/image.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/status.svg'... Remove this comment to see the full error message
import statusSVG from '../../assets/icons/status.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/user.svg' o... Remove this comment to see the full error message
import userSVG from '../../assets/icons/user.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/newfolder.s... Remove this comment to see the full error message
import folderNewSVG from '../../assets/icons/newfolder.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/eye.svg' or... Remove this comment to see the full error message
import eyeSVG from '../../assets/icons/eye.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/new-window.... Remove this comment to see the full error message
import newWindowSVG from '../../assets/icons/new-window.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/comment-fil... Remove this comment to see the full error message
import commentFillSVG from '../../assets/icons/comment-fill.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/restore.svg... Remove this comment to see the full error message
import restoreSVG from '../../assets/icons/restore.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/copy-fill.s... Remove this comment to see the full error message
import copyFillSVG from '../../assets/icons/copy-fill.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/at.svg' or ... Remove this comment to see the full error message
import atSVG from '../../assets/icons/at.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/quoteStart.... Remove this comment to see the full error message
import quoteStart from '../../assets/icons/quoteStart.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/embed.svg' ... Remove this comment to see the full error message
import embed from '../../assets/icons/embed.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/people.svg'... Remove this comment to see the full error message
import peopleSVG from '../../assets/icons/people.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/item.svg' o... Remove this comment to see the full error message
import itemSVG from '../../assets/icons/item.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/icon-new-it... Remove this comment to see the full error message
import newItemSVG from '../../assets/icons/icon-new-item.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/approved.sv... Remove this comment to see the full error message
import approvedSVG from '../../assets/icons/approved.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/question.sv... Remove this comment to see the full error message
import questionSVG from '../../assets/icons/question.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/hierarchy.s... Remove this comment to see the full error message
import hierarchySVG from '../../assets/icons/hierarchy.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/userInvite.... Remove this comment to see the full error message
import userInviteSVG from '../../assets/icons/userInvite.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/book.svg' o... Remove this comment to see the full error message
import bookSVG from '../../assets/icons/book.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/user-edit.s... Remove this comment to see the full error message
import userEditSVG from '../../assets/icons/user-edit.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/key.svg' or... Remove this comment to see the full error message
import keySVG from '../../assets/icons/key.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/share.svg' ... Remove this comment to see the full error message
import shareSVG from '../../assets/icons/share.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/pencil-fill... Remove this comment to see the full error message
import pencilFilledSVG from '../../assets/icons/pencil-filled.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/sitting-per... Remove this comment to see the full error message
import sittingPersonSVG from '../../assets/icons/sitting-person.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/upgrade-bol... Remove this comment to see the full error message
import upgradeBoltSVG from '../../assets/icons/upgrade-bolt.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/warning-tri... Remove this comment to see the full error message
import warningTriangleSVG from '../../assets/icons/warning-triangle.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/warning-oct... Remove this comment to see the full error message
import warningOctogonSVG from '../../assets/icons/warning-octogon.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/info-square... Remove this comment to see the full error message
import infoSquareSVG from '../../assets/icons/info-square.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/integration... Remove this comment to see the full error message
import integrationSVG from '../../assets/icons/integration.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/resolve.svg... Remove this comment to see the full error message
import resolvedSVG from '../../assets/icons/resolve.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/caption-16.... Remove this comment to see the full error message
import caption16 from '../../assets/icons/caption-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/blockquote-... Remove this comment to see the full error message
import blockquote24 from '../../assets/icons/blockquote-24.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import blockQuote16 from '../../assets/icons/formatting/blockquote-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import bold16 from '../../assets/icons/formatting/bold-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import clearFormatting16 from '../../assets/icons/formatting/clear-formatting-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import comment16 from '../../assets/icons/formatting/comment-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h116 from '../../assets/icons/formatting/h1-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h216 from '../../assets/icons/formatting/h2-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h316 from '../../assets/icons/formatting/h3-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h416 from '../../assets/icons/formatting/h4-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h516 from '../../assets/icons/formatting/h5-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import h616 from '../../assets/icons/formatting/h6-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import indent16 from '../../assets/icons/formatting/indent-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import orderedList16 from '../../assets/icons/formatting/orderedlist-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import outdent16 from '../../assets/icons/formatting/outdent-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import paragraph16 from '../../assets/icons/formatting/paragraph-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import strikethrough16 from '../../assets/icons/formatting/strikethrough-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import subscript16 from '../../assets/icons/formatting/subscript-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import superscript16 from '../../assets/icons/formatting/superscript-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import table16 from '../../assets/icons/formatting/table-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import underline16 from '../../assets/icons/formatting/underline-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import unorderedList16 from '../../assets/icons/formatting/unorderedlist-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import italic16 from '../../assets/icons/formatting/italic-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/formatting/... Remove this comment to see the full error message
import link16 from '../../assets/icons/formatting/link-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/caret-16.sv... Remove this comment to see the full error message
import caret16 from '../../assets/icons/caret-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/newwindow16... Remove this comment to see the full error message
import newWindow16 from '../../assets/icons/newwindow16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/pen16.svg' ... Remove this comment to see the full error message
import pen16 from '../../assets/icons/pen16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/clipboard16... Remove this comment to see the full error message
import clipboard16 from '../../assets/icons/clipboard16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/commentsMul... Remove this comment to see the full error message
import commentsMulti16 from '../../assets/icons/commentsMulti-16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/item16.svg'... Remove this comment to see the full error message
import item16 from '../../assets/icons/item16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/new-comment... Remove this comment to see the full error message
import newComment from '../../assets/icons/new-comment.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/cog16.svg' ... Remove this comment to see the full error message
import cog16 from '../../assets/icons/cog16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/danger16.sv... Remove this comment to see the full error message
import danger16 from '../../assets/icons/danger16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/repeatable1... Remove this comment to see the full error message
import repeatable from '../../assets/icons/repeatable16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/plaintext16... Remove this comment to see the full error message
import plaintext from '../../assets/icons/plaintext16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/textlimit16... Remove this comment to see the full error message
import textlimit from '../../assets/icons/textlimit16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/otheroption... Remove this comment to see the full error message
import otheroption from '../../assets/icons/otheroption16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/menu16.svg'... Remove this comment to see the full error message
import menu16 from '../../assets/icons/menu16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/code16.svg'... Remove this comment to see the full error message
import code16 from '../../assets/icons/code16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/template16.... Remove this comment to see the full error message
import template16 from '../../assets/icons/template16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/component16... Remove this comment to see the full error message
import component16 from '../../assets/icons/component16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/guidelines1... Remove this comment to see the full error message
import guidelines16 from '../../assets/icons/guidelines16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/radio16.svg... Remove this comment to see the full error message
import radio16 from '../../assets/icons/radio16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/checkbox16.... Remove this comment to see the full error message
import checkbox16 from '../../assets/icons/checkbox16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/asset16.svg... Remove this comment to see the full error message
import asset16 from '../../assets/icons/asset16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/text16.svg'... Remove this comment to see the full error message
import text16 from '../../assets/icons/text16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bolt.svg' o... Remove this comment to see the full error message
import bolt from '../../assets/icons/bolt.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/unused-temp... Remove this comment to see the full error message
import unusedTemplate16 from '../../assets/icons/unused-templates.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/addprojects... Remove this comment to see the full error message
import addProject16 from '../../assets/icons/addprojects16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/activity16.... Remove this comment to see the full error message
import activity16 from '../../assets/icons/activity16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/userGroup16... Remove this comment to see the full error message
import userGroup16 from '../../assets/icons/userGroup16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/todo16.svg'... Remove this comment to see the full error message
import todo16 from '../../assets/icons/todo16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/tick16.svg'... Remove this comment to see the full error message
import tick16 from '../../assets/icons/tick16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/settings16.... Remove this comment to see the full error message
import settings16 from '../../assets/icons/settings16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/earth.svg' ... Remove this comment to see the full error message
import earth from '../../assets/icons/earth.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/go-to16.svg... Remove this comment to see the full error message
import goto from '../../assets/icons/go-to16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/bynder.svg'... Remove this comment to see the full error message
import bynder from '../../assets/icons/bynder.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/locked12.sv... Remove this comment to see the full error message
import locked from '../../assets/icons/locked12.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/project-roo... Remove this comment to see the full error message
import projectRoot from '../../assets/icons/project-root.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/user-plus.s... Remove this comment to see the full error message
import userPlus from '../../assets/icons/user-plus.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/quote16.svg... Remove this comment to see the full error message
import quote16 from '../../assets/icons/quote16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/image16.svg... Remove this comment to see the full error message
import image16 from '../../assets/icons/image16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/table16.svg... Remove this comment to see the full error message
import tableFill16 from '../../assets/icons/table16.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/feedback.sv... Remove this comment to see the full error message
import feedback from '../../assets/icons/feedback.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/ai-assist-w... Remove this comment to see the full error message
import aiWand from '../../assets/icons/ai-assist-wand.svg';
// @ts-expect-error TS(2307): Cannot find module '../../assets/icons/highlighter... Remove this comment to see the full error message
import highlighter from '../../assets/icons/highlighter.svg';

/**
 * @usage
 *
 * <Icon name="comment" size="small" />
 */
const getIcon = (name: any) => {
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
    goto,
    bynder,
    locked,
    projectRoot,
    userPlus,
    quote16,
    tableFill16,
    image16,
    feedback,
    aiWand,
    highlighter
  };
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return icons[name] || null;
};

const Icon = (props: any) => {
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
    // @ts-expect-error TS(2531): Object is possibly 'null'.
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
    <span
      className={`icon icon--${props.name} icon-container-${
        props.containerSize
      } ${classNames}`}
    >
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
  defaultActiveColor: true,
  containerSize: '24'
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
  defaultActiveColor: PropTypes.bool,
  containerSize: PropTypes.string
};

export default Icon;

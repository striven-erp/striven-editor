/*
@license/i
* Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
*/

const EXTENSIONS = [
    ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".tif", ".jpeg",
    ".jpg", ".gif", ".bmp", ".txt", ".csv", ".png", ".msg", ".wav", ".mp3",
    ".mp4", ".zip", ".rtf", ".eps", ".ai", ".psd", ".avi", ".mov", ".wmv",
    ".cfg", ".wss", ".vsd", ".vsdx", ".tsd", ".lic"
];
const FONTPACK = "fas";
const OPTIONGROUPS = {
    textDecoration: {
        menu: {
            viewBox: "0 0 1792 1792",
            d: "M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 5-.5 13.5t-.5 12.5q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"
        },
        group: [
            { bold: { viewBox: "0 0 1792 1792", d: "M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68 .5t68 .5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z" } },
            { italic: { viewBox: "0 0 1792 1792", d: "M384 1662l17-85q22-7 61.5-16.5t72-19 59.5-23.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z" } },
            { underline: { viewBox: "0 0 1792 1792", d: "M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z" } },
            { strikethrough: { viewBox: "0 0 1792 1792", d: "M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-98-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 56-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z" } },
            { removeFormat: { viewBox: "0 0 640 512", d: "M336 416h-11.17l9.26-27.77L267 336.4 240.49 416H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm297.82 42.1L377 259.59 426.17 112H544v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H176a16 16 0 0 0-16 16v43.9L45.46 3.38A16 16 0 0 0 23 6.19L3.37 31.46a16 16 0 0 0 2.81 22.45l588.36 454.72a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zM309.91 207.76L224 141.36V112h117.83z" } }
        ]
    },
    listOptions: {
        menu: {
            viewBox: "0 0 1792 1792",
            d: "M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"
        },
        group: [
            { insertOrderedList: { viewBox: "0 0 1792 1792", d: "M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-121.5t.5-121.5v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z" } },
            { insertUnorderedList: { viewBox: "0 0 1792 1792", d: "M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5" } }
        ]
    },
    textAlign: {
        menu: {
            viewBox: "0 0 1792 1792",
            d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"
        },
        group: [
            { indent: { viewBox: "0 0 1792 1792", d: "M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z" } },
            { justifyLeft: { viewBox: "0 0 1792 1792", d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z" } },
            { justifyCenter: { viewBox: "0 0 1792 1792", d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z" } },
            { justifyRight: { viewBox: "0 0 1792 1792", d: "M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z" } }
        ]
    },
    attachments: {
        menu: {
            viewBox: "0 0 1792 1792",
            d: "M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"
        },
        group: [
            { attachment: { viewBox: "0 0 1792 1792", d: "M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z" } },
            { link: { viewBox: "0 0 1792 1792", d: "M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z" } },
            { image: { viewBox: "0 0 2048 1792", d: "M704 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z" } }
        ]
    }
};
const DEFAULTOPTIONS = [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "removeFormat",
    "insertOrderedList",
    "insertUnorderedList",
    "indent",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "attachment",
    "link",
    "image"
];
const ACTIVEOPTIONCOLOR = "#777777";

export default class StrivenEditor {
    constructor(el, options) {
        this.establishBrowser();

        this.range = new Range();
        this.files = [];
        this.optionGroups = OPTIONGROUPS;

        if (options) {
            this.options = options;
            options.fontPack || (this.options.fontPack = FONTPACK);
            options.extensions || (this.options.extensions = EXTENSIONS);
            options.toolbarOptions || (this.options.toolbarOptions = DEFAULTOPTIONS);
            options.activeOptionColor || (this.options.activeOptionColor = ACTIVEOPTIONCOLOR);
            (options.fileUpload !== false) && (this.options.fileUpload = true);
        } else {
            this.options = {
                fontPack: FONTPACK,
                extensions: EXTENSIONS,
                toolbarOptions: DEFAULTOPTIONS,
                activeOptionColor: ACTIVEOPTIONCOLOR,
                fileUpload: true
            };
        }

        this.initEditor(el);
        this.initResponsive();
        this.initOverflow();

        el.StrivenEditor = () => this;

        //bind handler functions to scope
        this.bound_popupEscapeHandler = this.popupEscapeHandler.bind(this);
    }

    initEditor(el) {
        this.editor = el;
        this.toolbar = this.initToolbar();
        this.body = this.initBody();
        this.linkMenu = this.initLinkMenu();
        this.imageMenu = this.initImageMenu();
        this.metaDataSection = this.initMetaDataSection();
        this.filesSection = this.options.fileUpload && this.initFilesSection();

        this.editor.classList.add("editor", "striven-editor")

        // Initialze with the value property in the options
        this.setContent(this.options.value || '')

        // Toolbar Hide
        if (this.options.toolbarHide) {
            this.customToolbarButton && (this.customToolbarButton.style.display = "none");
            this.toolbarOptionsGroup.style.display = "none";

            const bodyFocus = this.body.onfocus;
            this.body.onfocus = () => {
                bodyFocus && bodyFocus();

                this.overflow();
                this.toolbarSlideUp();
            };

            const bodyBlur = this.body.onblur;
            this.body.onblur = () => {
                bodyBlur && bodyBlur();
                this.overflow();
                setTimeout(() => {
                    if (
                        this.linkMenu.dataset.active !== "true"
                        && this.imageMenu.dataset.active !== "true"
                        && !this.isEditorInFocus()
                    ) {
                        this.toolbarSlideDown();
                    }
                }, 500);
            };
        }

        // Toolbar Options
        this.toolbarOptions.forEach(optionEl => {
            // Assign Styles
            // optionEl.style.padding = "0 10px";
            optionEl.style.cursor = "pointer";
            optionEl.style.userSelect = "none";

            // Execute Toolbar Commands
            const optionElClick = optionEl.onclick;
            optionEl.onclick = e => {

                const indents = () => {
                    const indents = this.body.querySelectorAll('blockquote');
                    [...indents].forEach(indent => indent.style.margin = "0 0 0 40px"); // make the margin an option
                }

                this.body.focus();

                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);

                const command = optionEl.id.split("-")[1];

                switch (command) {
                    case "insertOrderedList":
                        if (this.browser.isFirefox()) {
                            document.execCommand("indent");
                            document.execCommand(command);

                            indents();
                        }
                        else if (this.browser.isEdge()) {
                            document.execCommand(command);
                            [...document.querySelectorAll('ol')].forEach(ol => ol.style.marginLeft = "40px");
                        }
                        else {
                            document.execCommand("indent", true);
                            document.execCommand(command, true);
                        }
                        break;
                    case "insertUnorderedList":
                        if (this.browser.isFirefox()) {
                            document.execCommand("indent");
                            document.execCommand(command);

                            indents();
                        }
                        else if (this.browser.isEdge()) {
                            document.execCommand(command);
                            [...document.querySelectorAll('ul')].forEach(ul => ul.style.marginLeft = "40px");
                        }
                        else {
                            document.execCommand("indent", true);
                            document.execCommand(command, true);
                        }
                        break;
                    case "attachment":
                        const attachmentInput = document.createElement("input");
                        attachmentInput.style.display = "none";
                        attachmentInput.type = "file";
                        attachmentInput.onchange = e => this.attachFile(attachmentInput.files[0])
                        attachmentInput.click();
                        break;
                    case "link":
                        if (this.linkMenu.dataset.active === "true") {
                            this.closeLinkMenu();
                        } else {
                            this.linkMenuSlideIn();

                            this.linkMenu.querySelector('input').focus();
                        }
                        break;
                    case "image":
                        if (this.imageMenu.dataset.active === "true") {
                            this.closeImageMenu();
                        } else {
                            this.imageMenuSlideIn();

                            this.range = this.getRange();
                            this.imageMenu.querySelector('input').focus();
                        }
                        break;
                    default:
                        if (this.browser.isFirefox() || this.browser.isEdge()) {
                            document.execCommand(command);
                            (command === 'indent') && indents();
                        }
                        else {
                            document.execCommand(command, true);
                        }

                        this.toolbarState();
                        break;
                }

                optionElClick && optionElClick();
            };

        });

        this.toolbar && this.editor.appendChild(this.toolbar);
        this.body && this.editor.appendChild(this.body);
        this.linkMenu && this.editor.appendChild(this.linkMenu);
        this.imageMenu && this.editor.appendChild(this.imageMenu);
        this.metaDataSection && this.editor.appendChild(this.metaDataSection);
        this.filesSection &&    this.editor.appendChild(this.filesSection);

        // Reposition Toolbar
        if (this.options.toolbarBottom) {
            this.editor.removeChild(this.toolbar);
            this.editor.append(this.toolbar);
        }
    }

    imageMenuSlideIn() {
        const that = this;

        this.openImageMenu();

        let opacity = 0;
        let right = this.editor.offsetWidth / 4;
        let id = setInterval(frame, 5);

        this.imageMenu.style.opacity = opacity;

        function frame() {
            if (right <= 10) {
                clearInterval(id);
                that.imageMenu.style.opacity = 1;
            } else {
                right -= 2.5;
                opacity += .01;
                that.imageMenu.style.opacity = `${opacity}`;
                that.imageMenu.style.right = `${right}px`;
            }
        }
    }

    linkMenuSlideIn() {
        const that = this;

        this.openLinkMenu();

        let opacity = 0;
        let right = this.editor.offsetWidth / 4;
        let id = setInterval(frame, 5);

        this.linkMenu.style.opacity = opacity;

        function frame() {
            if (right <= 10) {
                clearInterval(id);
                that.linkMenu.style.opacity = 1;
            } else {
                right -= 2.5;
                opacity += .01;
                that.linkMenu.style.opacity = `${opacity}`;
                that.linkMenu.style.right = `${right}px`;
            }
        }
    }

    toolbarSlideUp() {
        const that = this;

        let height = this.toolbar.offsetHeight;
        let id = setInterval(frame, 5);

        function frame() {
            if (height >= 40) {
                const customButton = that.toolbar.querySelector('#custom-button');
                customButton && (customButton.style.display = "flex");
                that.toolbarOptionsGroup.style.display = "flex";
                clearInterval(id);
            } else {
                height++;
                that.toolbar.style.minHeight = `${height}px`;
            }
        }
    }

    toolbarSlideDown() {
        const that = this;

        const customButton = this.toolbar.querySelector('#custom-button');
        customButton && (customButton.style.display = "none");
        this.toolbarOptionsGroup.style.display = "none";

        let height = 40;
        let id = setInterval(frame, 5);
        function frame() {
            if (height === 0) {
                clearInterval(id);
            } else {
                height--;
                that.toolbar.style.minHeight = `${height}px`;
            }
        }
    }

    initToolbar() {
        const toolbar = document.createElement("div");
        this.toolbarOptionsGroup = document.createElement("div");
        const groups = Object.keys(this.optionGroups);

        toolbar.classList.add("se-toolbar");
        toolbar.style.minHeight = this.options.toolbarHide ? "0" : "40px";

        this.toolbarOptionsGroup.classList.add("se-toolbar-options");
        this.toolbarOptionsGroup.style.display = this.options.toolbarHide ? "none" : "flex";

        toolbar.onclick = () => this.body.focus();

        //iterate groups
        groups.forEach((group) => {
            // add menu to toolbarOptions
            const toolbarMenu = document.createElement("div");
            // const toolbarMenuIcon = document.createElement("i");

            toolbarMenu.classList.add("se-toolbar-menu");
            toolbarMenu.id = `menu-${group}`;

            // toolbarMenuIcon.classList.add(this.options.fontPack);
            // toolbarMenuIcon.classList.add(this.optionGroups[group].menu);

            toolbarMenu.appendChild(this.constructSVG(this.optionGroups[group].menu));
            this.toolbarOptionsGroup.appendChild(toolbarMenu);

            // add group to toolbarOptions
            const toolbarGroup = document.createElement("div");

            toolbarGroup.classList.add("se-toolbar-group");
            toolbarGroup.id = `group-${group}`;

            this.options.toolbarOptions.forEach((option) => {
                const toolbarOption = this.optionGroups[group].group.filter(group => group[option])[0];
                if (toolbarOption) {
                    const svgData = toolbarOption[option];
                    const optionSpan = this.constructSVG(svgData);

                    optionSpan.classList.add('se-toolbar-option');
                    optionSpan.id = `toolbar-${option}`;

                    toolbarGroup.appendChild(optionSpan);
                }
            })

            this.toolbarOptionsGroup.appendChild(toolbarGroup);

            // FONT AWESOME IMPORTED ICONS
            // this.optionGroups[group].group.forEach((option) => {
            //     const toolbarCommand = Object.keys(option)[0];
            //     if(this.options.toolbarOptions.includes(toolbarCommand)){
            //         const optionSpan = this.constructSVG(option[toolbarCommand]);
            //         // const optionIcon = document.createElement("i");

            //         optionSpan.id = `toolbar-${toolbarCommand}`;
            //         optionSpan.style.margin = "0 10px";
            //         // optionIcon.classList.add(this.options.fontPack);
            //         // optionIcon.classList.add(option[toolbarCommand]);

            //         // optionSpan.appendChild(optionIcon);
            //         toolbarGroup.appendChild(optionSpan);
            //     }
            // })

            // this.toolbarOptionsGroup.appendChild(toolbarGroup);
        })

        // toolbar group for custom options
        const customOptions = this.options.toolbarOptions.filter(option => typeof option === "object");
        if (customOptions.length > 0) {
            this.customToolbarMenu = document.createElement("div");

            this.customToolbarMenu.classList.add("se-toolbar-menu");
            this.customToolbarMenu.id = `menu-custom`;

            const customSVGViewBox = "0 0 1792 1792";
            const customSVGD = "M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z";

            this.customToolbarMenu.appendChild(this.constructSVG({ viewBox: customSVGViewBox, d: customSVGD }));
            this.toolbarOptionsGroup.appendChild(this.customToolbarMenu);

            this.customToolbarGroup = document.createElement("div");

            this.customToolbarGroup.classList.add("se-toolbar-group");
            this.customToolbarGroup.id = "group-custom";

            customOptions.forEach((customOption) => {
                const { icon, handler } = customOption;
                const optionSpan = this.constructSVG(icon);

                optionSpan.id = `toolbar-customOption`;
                optionSpan.style.margin = "0 10px";
                optionSpan.onclick = () => handler();

                this.customToolbarGroup.appendChild(optionSpan);
            })

            this.toolbarOptionsGroup.appendChild(this.customToolbarGroup);
        }

        toolbar.appendChild(this.toolbarOptionsGroup);

        // Custom toolbar button
        if(this.options.customToolbarButton) {
            const customButton = document.createElement('div');
            customButton.id = 'custom-button';
            customButton.appendChild(this.options.customToolbarButton);
            toolbar.appendChild(customButton);

            this.options.toolbarHide && (customButton.style.display = "none");
        }

        this.toolbarOptions = toolbar.querySelectorAll("span");
        this.toolbarGroups = [...toolbar.getElementsByClassName("se-toolbar-group")];
        this.toolbarMenus = [...toolbar.getElementsByClassName("se-toolbar-menu")];
        this.customToolbarButton = toolbar.querySelector("#custom-toolbar-button");

        this.toolbarMenus.push(this.customToolbarMenu);
        this.toolbarGroups.push(this.customToolbarGroup);

        // Remove menu that has no options enabled
        this.toolbarGroups.forEach((group) => {
            if (group && group.children.length < 1) {
                const groupName = group.id.split("-")[1];
                const menu = this.toolbarMenus.filter((menu) => menu.id.split("-")[1] === groupName)[0];
                menu.remove();
            }
        })

        return toolbar;
    }

    initBody() {
        const body = document.createElement("div");

        body.classList.add("se-body");
        body.contentEditable = "true";
        body.style.height = this.editor.style.height;
        body.style.minHeight = this.editor.style.minHeight;
        body.style.maxHeight = this.editor.style.maxHeight;

        this.editor.style.height = 'auto';
        this.editor.style.minHeight = 'auto';
        this.editor.style.maxHeight = 'auto';

        this.options.placeholder && (body.dataset.placeholder = this.options.placeholder);

        // Placeholder logic
        // if (this.options.placeholder) {
        //     const placeholderNode = document.createElement("p");
        //     placeholderNode.id = "placeholder-node";
        //     placeholderNode.style.color = "#5f6368";
        //     placeholderNode.style.margin = "0";
        //     placeholderNode.textContent = this.options.placeholder;

        //     body.append(placeholderNode);

        //     const bodyFocus = body.onfocus;
        //     body.onfocus = () => {
        //         bodyFocus && bodyFocus();
        //         (body.querySelector("#placeholder-node") === placeholderNode) && this.clearContent();
        //     }

        //     const bodyBlur = body.onblur;
        //     body.onblur = () => {
        //         bodyBlur && bodyBlur();
        //         (this.getContent().trim() === "") && body.append(placeholderNode);
        //     }
        // }

        // Paste Handler
        body.onpaste = e => {
            function dataURLtoFile(dataurl, filename) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }

                const file = new File([u8arr], filename, { type: mime });
                return new File([u8arr], `${file.name}.${file.type.split('/').pop()}`, { type: file.type });
            }

            const convertImage = file =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });

            if (
                e.clipboardData.files.length > 0 &&
                e.clipboardData.files[0].type.includes("image")
            ) {
                convertImage(e.clipboardData.files[0]).then(res => {
                    if (this.options.imageUrl) {
                        this.getImage(res)
                            .then((data) => {
                                document.execCommand("insertImage", true, data.imageRef);
                            })
                            .catch((err) => {
                                document.execCommand("insertImage", true, res);
                            })
                    } else {
                        document.execCommand("insertImage", true, res);
                        this.options.uploadOnPaste && this.attachFile(dataURLtoFile(res, "pastedimage"));
                    }
                    this.overflow();
                });
            }

            // sanitize of html
            if (this.options.sanitizePaste && e.clipboardData.types.includes("text/html")) {
                e.preventDefault();

                let pastedHtmlItem;

                for (let i = 0; i < e.clipboardData.items.length; i++) {
                    const item = e.clipboardData.items[i];
                    (item.type === "text/html") && (pastedHtmlItem = item);
                }

                if (pastedHtmlItem) {
                    pastedHtmlItem.getAsString((htmlString) => {
                        const range = this.getRange();
                        range.insertNode(this.scrubHTML(htmlString));
                        range.collapse();
                    })
                }
            }

            // meta extraction on paste
            if (
                e.clipboardData.items.length > 0 &&
                e.clipboardData.items[0].type === "text/plain"
            ) {
                e.clipboardData.items[0].getAsString(string => {
                    if (this.options.metaUrl && this.validURL(string)) {
                        this.getMeta(string).then(res => {
                            const { url, title, image, description } = res;
                            url &&
                                title &&
                                image &&
                                this.createMetaDataElement(url, image, title, description);
                        });
                    }
                });
            }

            this.overflow();
        };

        // State of the editor
        const bodyKeyup = body.onkeyup;
        body.onkeyup = e => {
            bodyKeyup && bodyKeyup();

            this.range = this.getRange();

            if (this.options.submitOnEnter && e.keyCode === 13 && !e.shiftKey) {

                if (!document.queryCommandState('insertOrderedList') && !document.queryCommandState('insertUnorderedList')) {
                    const hasText = !!this.getTextContent();
                    const hasImage = !!body.querySelector('img');

                    // remove break from enter
                    if (hasText || hasImage) {
                        const breaks = body.querySelectorAll('div');
                        const divBreak = breaks[breaks.length ? breaks.length - 1 : 0];
                        divBreak && divBreak.remove();
                    }

                    const content = this.getContent();
                    const files = this.getFiles();

                    this.clearContent();
                    this.filesSection && this.clearFiles();

                    if (files.length || hasText || hasImage) {
                        this.options.submitOnEnter({ content: (hasText || hasImage) && content, files });
                    }
                }

            }
            this.toolbarState();
        }

        const bodyMouseUp = body.onmouseup;
        body.onmouseup = e => {
            bodyMouseUp && bodyMouseUp();
            this.range = this.getRange();
        }

        return body;
    }

    initLinkMenu() {
        const linkMenu = document.createElement("div");
        const linkMenuForm = document.createElement("div");
        const linkMenuButtons = document.createElement("div");
        const linkMenuButton = document.createElement("button");
        const linkMenuCloseButton = document.createElement("button");
        const linkMenuFormLabel = document.createElement("p");
        const linkMenuFormInput = document.createElement("input");

        linkMenu.id = "link-menu";
        linkMenu.classList.add('se-popup')
        linkMenu.dataset.active = "false";

        linkMenuForm.classList.add('se-popup-form')

        linkMenuFormLabel.classList.add('se-form-label')
        linkMenuFormLabel.textContent = "Web Address";

        linkMenuFormInput.classList.add('se-form-input')
        linkMenuFormInput.type = "text";
        linkMenuFormInput.placeholder = "Insert a Link";


        linkMenuButtons.classList.add('se-popup-button-container');

        linkMenuButton.classList.add('se-popup-button','se-button-primary');
        linkMenuButton.textContent = "Insert Link";

        linkMenuCloseButton.classList.add('se-popup-button','se-button-secondary');
        linkMenuCloseButton.textContent = "Close";

        linkMenuButton.onclick = e => {
            const linkValue = linkMenuFormInput.value;

            if (linkValue) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);

                if (this.browser.isFirefox() || this.browser.isEdge()) {
                    document.execCommand("createLink", false, linkValue)
                }
                else {
                    document.execCommand("createLink", true, linkValue)
                }

                if (this.options.metaUrl && this.validURL(linkValue)) {
                    this.getMeta(linkValue).then(res => {
                        const { url, image, title, description } = res;
                        url &&
                            image &&
                            title &&
                            this.createMetaDataElement(url, image, title, description);
                    });
                }

                const bodyLinks = this.body.querySelectorAll("a");

                if (!this.browser.isFirefox()) {
                    [...bodyLinks].forEach(link => (link.contentEditable = 'false'));
                }

                linkMenuFormInput.value = "";
                this.closeLinkMenu();
            } else {
                this.body.focus();
                this.closeLinkMenu();
            }
        };

        linkMenuCloseButton.onclick = e => {
            this.body.focus();
            this.closeLinkMenu();
        }

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);

        linkMenu.appendChild(linkMenuForm);

        linkMenuButtons.appendChild(linkMenuButton);
        linkMenuButtons.appendChild(linkMenuCloseButton);

        linkMenu.appendChild(linkMenuButtons);
        return linkMenu;
    }

    initImageMenu() {
        const imageMenu = document.createElement("div");
        const imageMenuForm = document.createElement("div");
        const imageMenuButtons = document.createElement("div");
        const imageMenuButton = document.createElement("button");
        const imageMenuCloseButton = document.createElement("button");
        const imageMenuFormLabel = document.createElement("p");
        const imageMenuFormSourceInput = document.createElement("input");

        imageMenu.id = "image-menu";
        imageMenu.classList.add('se-popup');
        imageMenu.dataset.active = "false";

        imageMenuForm.classList.add('se-popup-form');

        imageMenuFormLabel.classList.add('se-form-label');
        imageMenuFormLabel.textContent = "Image URL";

        imageMenuFormSourceInput.classList.add('se-form-input');
        imageMenuFormSourceInput.type = "text";
        imageMenuFormSourceInput.placeholder = "Insert a Link";

        imageMenuButtons.classList.add('se-popup-button-container');

        imageMenuButton.classList.add('se-popup-button','se-button-primary');
        imageMenuButton.textContent = "Insert Image";

        imageMenuCloseButton.classList.add('se-popup-button','se-button-secondary');
        imageMenuCloseButton.textContent = "Close";

        imageMenuForm.appendChild(imageMenuFormLabel);
        imageMenuForm.appendChild(imageMenuFormSourceInput);

        // Height Input Form
        const imageMenuHeightForm = imageMenuForm.cloneNode(true);
        const imageMenuHeightFormInput = imageMenuHeightForm.querySelector('input');
        const imageMenuHeightFormLabel = imageMenuHeightForm.querySelector('p');

        imageMenuHeightFormInput.placeholder = "Image Height";
        imageMenuHeightFormLabel.textContent = "Height";

        // Width Input Form
        const imageMenuWidthForm = imageMenuForm.cloneNode(true);
        const imageMenuWidthFormInput = imageMenuWidthForm.querySelector('input');
        const imageMenuWidthFormLabel = imageMenuWidthForm.querySelector('p');

        imageMenuWidthFormInput.placeholder = "Image Width";
        imageMenuWidthFormLabel.textContent = "Width";

        imageMenuButton.onclick = e => {
            const linkValue = imageMenuFormSourceInput.value;
            const heightValue = imageMenuHeightFormInput.value;
            const widthValue = imageMenuWidthFormInput.value;

            if (linkValue) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);

                if (this.browser.isFirefox() || this.browser.isEdge()) { document.execCommand("insertImage", false, linkValue) }
                else { document.execCommand("insertImage", true, linkValue) }

                let insertedImage = [...this.body.querySelectorAll(`img`)].filter(img => img.src === linkValue);
                insertedImage = insertedImage[insertedImage.length - 1];
                insertedImage && (insertedImage.style.height = `${heightValue}px`);
                insertedImage && (insertedImage.style.width = `${widthValue}px`);

                imageMenuHeightFormInput.value = "";
                imageMenuWidthFormInput.value = "";
                imageMenuFormSourceInput.value = "";
                this.closeImageMenu();
            } else {
                this.body.focus();
                this.closeImageMenu();
            }
        };
        imageMenuCloseButton.onclick = e => {
            this.body.focus();
            this.closeImageMenu();
        }
        imageMenu.appendChild(imageMenuHeightForm);
        imageMenu.appendChild(imageMenuWidthForm);
        imageMenu.appendChild(imageMenuForm);

        imageMenuButtons.appendChild(imageMenuButton);
        imageMenuButtons.appendChild(imageMenuCloseButton);

        imageMenu.appendChild(imageMenuButtons);

        return imageMenu;
    }

    initMetaDataSection() {
        const metaDataSection = document.createElement("div");
        metaDataSection.classList.add("se-metadata-section");

        return metaDataSection;
    }

    initFilesSection() {
        const filesSection = document.createElement("div");
        filesSection.classList.add("se-files-section");

        window.addEventListener("dragover", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);

        window.addEventListener("drop", function (e) {
            e = e || event;
            e.preventDefault();
        }, false);

        this.body.ondragenter = e => {
            console.log(e.dataTransfer.files)
            if (!this.body.querySelector('.se-file-drop-dropzone')) {
                const dropzone = document.createElement("div");
                const dropzoneTextEl = document.createElement("p");

                dropzone.classList.add('se-file-drop-dropzone');
                dropzone.contentEditable = "false";
                dropzoneTextEl.textContent = 'Drop files to upload';

                dropzone.ondrop = e => e.target.remove();
                dropzone.ondragover = e => dropzone.dataset.enabled = "true";

                dropzone.append(dropzoneTextEl);
                this.body.append(dropzone);
            }
        }

        this.body.ondragleave = e => {
            const dropzone = this.body.querySelector('.se-file-drop-dropzone');
            (dropzone && dropzone.dataset.enabled === "true") && dropzone.remove();
        }

        this.body.ondrop = e => {
            const dropzone = this.body.querySelector('.se-file-drop-dropzone');
            dropzone && dropzone.remove();

            e.preventDefault();

            const file = (e.dataTransfer.files.length && e.dataTransfer.files[0]);
            this.attachFile(file);
        }

        this.isEdge && (this.body.ondragover = e => e.preventDefault());

        return filesSection;
    }

    createFileElement(name, size) {
        const fileEl = document.createElement("div");
        const fileNameEl = document.createElement("p");
        const fileSizeEl = document.createElement("p");
        const removeFileEl = document.createElement("p");

        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = "X";

        fileEl.classList.add('se-file')
        fileEl.dataset.fileindex = (this.files.length - 1);

        fileNameEl.classList.add('se-file-name')

        fileSizeEl.classList.add('se-file-size')

        removeFileEl.classList.add('se-remove-link')
       

        removeFileEl.onclick = e => {
            this.files.splice(e.target.parentElement.dataset.fileindex, 1);
            e.target.parentElement.remove();
        }

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);

        this.filesSection.appendChild(fileEl);
    }

    createMetaDataElement(url, img, title, description) {
        const metaItemEl = document.createElement("div");
        const metaLinkEl = document.createElement("a");
        const metaImageEl = document.createElement("img");
        const metaDataEl = document.createElement("div");
        const metaDataTitleEl = document.createElement("h4");
        const metaDataDescriptionEl = document.createElement("p");
        const removeMetaDataEl = document.createElement("span");

        metaLinkEl.href = url;
        metaImageEl.src = img;
        metaDataTitleEl.textContent = title;
        metaDataDescriptionEl.textContent = description;
        removeMetaDataEl.textContent = "X";

        metaLinkEl.target = "blank";

        metaItemEl.classList.add("se-meta-item");

        metaImageEl.classList.add("se-meta-image");

        metaDataTitleEl.classList.add("se-meta-data-title");

        metaDataDescriptionEl.style.margin = "0";

        removeMetaDataEl.classList.add("se-remove-link");
       
        removeMetaDataEl.onclick = e => e.target.parentElement.remove();

        metaLinkEl.appendChild(metaImageEl);

        metaDataEl.appendChild(metaDataTitleEl);
        metaDataEl.appendChild(metaDataDescriptionEl);

        metaItemEl.appendChild(metaLinkEl);
        metaItemEl.appendChild(metaDataEl);
        metaItemEl.appendChild(removeMetaDataEl);

        this.metaDataSection.appendChild(metaItemEl);
    }

    constructSVG(svgData) {
        const { viewBox, d } = svgData;
        const fillColor = (this.options.toolbarOptionFillColor ? this.options.toolbarOptionFillColor : "#333");
        const xmlns = "http://www.w3.org/2000/svg";
        const height = "14";
        const width = "16";

        const icon = document.createElement('span');
        const svg = `<svg width="${width}" height="${height}" viewBox="${viewBox}" xmlns="${xmlns}">`;
        const path = `<path fill="${fillColor}" d="${d}"/>`;

        icon.innerHTML = `${svg}${path}</svg>`;

        return icon;
    }

    initResponsive() {
        const that = this;

        if (!this.options.minimal) {
            let responsive = window.matchMedia("(max-width: 700px)").matches;

            function responsiveGroups(isResponsive) {

                that.toolbarGroups.forEach(group => {
                    if (group) {
                        group.dataset.open = "false";
                        group.style.display = isResponsive ? "none" : "block";
                        group.style.position = isResponsive ? "absolute" : "relative";
                        // group.style.right = isResponsive ? "10px" : "inherit";

                        !that.options.toolbarBottom && (group.style.top = isResponsive ? "50px" : "inherit");
                        that.options.toolbarBottom && (group.style.bottom = isResponsive ? "50px" : "inherit");

                        // group.style.margin = isResponsive ? "0 2px" : "inherit";
                        // group.style.backgroundColor = isResponsive ? "#fff" : "inherit";
                        // group.style.border = isResponsive ? "2px solid #ddd" : "none";
                    }
                });

                that.toolbarMenus.forEach(menu => {
                    function toggleMenu() {
                        const selectedGroup = that.toolbar.querySelector(
                            `#group-${menu.id.split("-")[1]}`
                        );

                        if (selectedGroup.dataset.open === "false") {
                            // close opened groups
                            that.toolbarGroups.forEach(group => {
                                if (group && group.dataset.open === "true") {
                                    group.style.display = "none";
                                    group.dataset.open = "false";
                                }
                            });

                            // open group
                            selectedGroup.style.display = "block";
                            selectedGroup.style.padding = "5px 5px 0 5px";
                            selectedGroup.dataset.open = "true";
                        } else {
                            selectedGroup.style.display = "none";
                            selectedGroup.dataset.open = "false";
                        }
                    }

                    if (menu) {
                        menu.style.padding = "0 10px";
                        menu.style.cursor = "pointer";
                        menu.style.userSelect = "none";

                        menu.style.display = isResponsive ? "block" : "none";
                        menu.onclick = e => {
                            toggleMenu()
                            that.body.focus();
                        };
                    }
                });
            }

            function setResponsive() {
                responsive = window.matchMedia("(max-width: 700px)").matches;
                responsiveGroups(responsive);
            }

            setResponsive();
            window.onresize = () => {
                this.toolbarGroups.forEach(group => (group && (group.style.padding = "0")));
                this.closeLinkMenu();
                this.closeImageMenu();
                setResponsive();
            }
        } else {
            this.toolbarMenus.forEach(menu => (menu && (menu.style.display = "none")));
            this.toolbar.querySelector("#toolbar-strikethrough").style.display = "none";
            this.toolbar.querySelector("#toolbar-image").style.display = "none";
            this.toolbar.querySelector("#toolbar-insertOrderedList").style.display =
                "none";
            this.toolbar.querySelector("#group-textAlign").style.display = "none";
            this.toolbar.querySelector("#toolbar-removeFormat").style.display = "none";
        }
    }

    initOverflow() {
        const onFocus = this.body.onfocus;
        this.body.onfocus = () => {
            onFocus && onFocus();
            this.overflow();
        }

        const onBlur = this.body.onblur;
        this.body.onblur = () => {
            onBlur && onBlur();
            this.overflow();
        };

        const bodyKeypress = this.body.onkeypress;
        this.body.onkeypress = () => {
            bodyKeypress && bodyKeypress();
            this.overflow();
        }
    }

    getFiles() {
        return this.files;
    }

    getContent() {
        return this.pruneScripts(this.body).innerHTML;
    }

    getRange() {
        return window.getSelection().getRangeAt(0);
    }

    getMeta(url) {
        return fetch(this.options.metaUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ targetUrl: url })
        }).then((res) => res.json())
    }

    getImage(imageEncoding) {
        return fetch(this.options.imageUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageEncoding })
        }).then((res) => res.json())
    }

    validURL(str) {
        var pattern = new RegExp(
            "^(https?:\\/\\/)?" +
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
            "((\\d{1,3}\\.){3}\\d{1,3}))" +
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
            "(\\?[;&a-z\\d%_.~+=-]*)?" +
            "(\\#[-a-z\\d_]*)?$",
            "i"
        );
        return !!pattern.test(str);
    }

    overflow() {
        const body = this.body;
        body.scrollHeight > body.clientHeight
            ? (body.style.overflowY = "scroll")
            : (body.style.overflowY = "hidden");
        body.scrollWidth > body.clientWidth
            ? (body.style.overflowX = "scroll")
            : (body.style.overflowX = "hidden");
    }

    pruneScripts (el) {
        const scripts = el.querySelectorAll('script');
        scripts.forEach(script => script.remove());

        return el;
    }

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    validateFile(file) {
        const extension = file.type.split('/').pop();
        return this.options.extensions.includes(`.${extension}`);
    }

    attachFile(file) {
        if (this.validateFile(file)) {
            this.files.push(file);
            this.createFileElement(file.name, this.formatBytes(file.size));
        } else {
            this.fileInvalid();
        }
    }

    fileInvalid() {
        this.options.onInvalidFile && this.options.onInvalidFile();
        this.body.style.transition = "background-color .5s";
        this.body.style.backgroundColor = "#d9534f";
        setTimeout(() => {
            this.body.style.backgroundColor = "inherit";
            setTimeout(() => this.body.style.transition = "none", 500);
        }, 2000);
    }

    openLinkMenu() {
        //close other open popups
        this.closeImageMenu();
        this.linkMenu.dataset.active = "true";
        this.linkMenu.style.display = "block";
        this.addPopupEscapeHandler();
    }

    openImageMenu() {
        //close other open popups
        this.closeLinkMenu();
        this.imageMenu.dataset.active = "true";
        this.imageMenu.style.display = "block";
        this.addPopupEscapeHandler();
    }

    closeLinkMenu() {
        this.linkMenu.dataset.active = "false";
        this.linkMenu.style.display = "none";
        this.removePopupEscapeHandler();
    }

    closeImageMenu() {
        this.imageMenu.dataset.active = "false";
        this.imageMenu.style.display = "none";
        this.removePopupEscapeHandler();
    }

    popupEscapeHandler(evt) {
        if (evt.which === 27) {
            //close all open popups
            this.closeImageMenu();
            this.closeLinkMenu();
        }
    }

    addPopupEscapeHandler() {
        this.removePopupEscapeHandler();
        this.editor.addEventListener('keyup', this.bound_popupEscapeHandler);
    }
    removePopupEscapeHandler() {
        this.editor.removeEventListener('keyup', this.bound_popupEscapeHandler);
    }

    setContent(html) {
        this.clearContent();
        this.body.innerHTML = html;
    }

    clearContent() {
        this.body.innerHTML = "";
    }

    clearFiles() {
        this.files = [];
        this.filesSection.innerHTML = '';
    }

    getTextContent() {
        return this.body.textContent;
    }

    scrubHTML(html) {
        const dirtyNode = document.createElement("div");
        const cleanNode = document.createElement("div");

        dirtyNode.innerHTML = html;
        cleanNode.append(document.createTextNode(dirtyNode.textContent));

        return cleanNode;
    }

    toolbarState() {
        this.options.toolbarOptions.forEach(option => {
            const toolbarOption = this.toolbar.querySelector(`#toolbar-${option}`);
            if (!option.includes('justify') && !option.includes('list')) {
                if (document.queryCommandState(option)) {
                    toolbarOption.querySelector('path').setAttribute('fill', this.options.activeOptionColor);
                } else {
                    toolbarOption.querySelector('path').setAttribute('fill', '#333');
                }
            }
        })
    }

    /**
     * This method is used to detect the user browser and environment
     */
    establishBrowser() {
        const userAgent = (navigator && navigator.userAgent || '').toLowerCase();
        const vendor = (navigator && navigator.vendor || '').toLowerCase();

        const comparator = {
            '<': function (a, b) { return a < b; },
            '<=': function (a, b) { return a <= b; },
            '>': function (a, b) { return a > b; },
            '>=': function (a, b) { return a >= b; }
        };

        const compareVersion = (version, range) => {
            const str = (range + '');
            const n = +(str.match(/\d+/) || NaN);
            const op = str.match(/^[<>]=?|/)[0];
            return comparator[op] ? comparator[op](version, n) : (version == n || n !== n);
        };

        this.browser = {
            userAgent,
            vendor,
        };

        // detect opera
        this.browser.isOpera = function isOpera(range) {
            const match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        }

        // detect chrome
        this.browser.isChrome = function isChrome(range) {
            const match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
            return match !== null && !this.isOpera() && compareVersion(match[1], range);
        }

        // detect firefox
        this.browser.isFirefox = function isFirefox(range) {
            const match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect safari
        this.browser.isSafari = function isSafari(range) {
            const match = userAgent.match(/version\/(\d+).+?safari/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect internet explorer
        this.browser.isIE = function isIE(range) {
            const match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect edge
        this.browser.isEdge = function isEdge(range) {
            const match = userAgent.match(/edge\/(\d+)/);
            return match !== null && compareVersion(match[1], range);
        };

        // detect blink engine
        this.browser.isBlink = function isBlink() {
            return (this.isChrome() || this.isOpera()) && !!window.CSS;
        };
    }

    isEditorInFocus() {
        let activeEl = document.activeElement;
        var isEditor = (el) => {
            if (el === this.editor) {
                return true;
            }
            else if (el === document.body) {
                return false;
            }
            return el.parentNode && isEditor(el.parentNode);
        };
        return isEditor(activeEl);
    }
}

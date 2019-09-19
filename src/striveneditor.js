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

export default class StrivenEditor {
    constructor(el, options) {
        this.range = new Range();
        this.files = [];
        this.optionGroups = OPTIONGROUPS;

        if (options) {
            this.options = options;
            options.fontPack || (this.options.fontPack = FONTPACK);
            options.extensions || (this.options.extensions = EXTENSIONS);
            options.toolbarOptions || (this.options.toolbarOptions = DEFAULTOPTIONS);
        } else {
            this.options = {
                fontPack: FONTPACK,
                extensions: EXTENSIONS,
                toolbarOptions: DEFAULTOPTIONS
            };
        }

        this.initEditor(el);
        this.initResponsive();
        this.initOverflow();
    }

    initEditor(el) {
        this.editor = el;
        this.toolbar = this.initToolbar();
        this.body = this.initBody();
        this.linkMenu = this.initLinkMenu();
        this.imageMenu = this.initImageMenu();
        this.metaDataSection = this.initMetaDataSection();
        this.filesSection = this.initFilesSection();

        this.editor.style.border = "2px solid #ddd";
        this.editor.style.display = "flex";
        this.editor.style.position = "relative";
        this.editor.style.flexDirection = "column";
        this.editor.style.fontFamily = "Arial";

        this.editor.style.minHeight = "auto";
        this.editor.style.maxHeight = "auto";
        this.editor.style.maxWidth = "100%";

        // Toolbar Hide
        if (this.options.toolbarHide) {
            this.toolbarSend.style.display = "none";
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
                        document.activeElement !== this.body &&
                        document.activeElement !== this.linkMenu.querySelector('input') &&
                        document.activeElement !== this.imageMenu.querySelectorAll('input')[0] &&
                        document.activeElement !== this.imageMenu.querySelectorAll('input')[1] &&
                        document.activeElement !== this.imageMenu.querySelectorAll('input')[2]
                    ) {
                        this.toolbarSlideDown();
                    }
                }, 2000);
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
                this.body.focus();

                const command = optionEl.id.split("-")[1];

                switch (command) {
                    case "insertOrderedList":
                        document.execCommand("indent", true);
                        document.execCommand(command, true);
                        break;
                    case "insertUnorderedList":
                        document.execCommand("indent", true);
                        document.execCommand(command, true);
                        break;
                    case "attachment":
                        const attachmentInput = document.createElement("input");
                        attachmentInput.style.display = "none";
                        attachmentInput.type = "file";
                        attachmentInput.click();
                        attachmentInput.onchange = e => this.attachFile(attachmentInput.files[0]);
                        break;
                    case "link":
                        if (this.linkMenu.dataset.active === "true") {
                            this.closeLinkMenu();
                        } else {
                            this.openLinkMenu();

                            this.range = this.getRange();
                            this.linkMenu.querySelector('input').focus();
                        }
                        break;
                    case "image":
                        if (this.imageMenu.dataset.active === "true") {
                            this.closeImageMenu();
                        } else {
                            this.openImageMenu();

                            this.range = this.getRange();
                            this.imageMenu.querySelector('input').focus();
                        }
                        break;
                    default:
                        document.execCommand(command, true);
                        break;
                }

                optionElClick && optionElClick();
            };
        });

        // Get Content from Editor
        this.editor.getcontent = () => this.getContent();

        // Get Editor Range
        this.editor.getrange = () => this.getRange();

        this.editor.appendChild(this.toolbar);
        this.editor.appendChild(this.body);
        this.editor.appendChild(this.linkMenu);
        this.editor.appendChild(this.imageMenu);
        this.editor.appendChild(this.metaDataSection);
        this.editor.appendChild(this.filesSection);

        // Reposition Toolbar
        if (this.options.toolbarBottom) {
            this.editor.removeChild(this.toolbar);
            this.editor.append(this.toolbar);
        }
    }

    toolbarSlideUp() {
        const that = this;

        let height = this.toolbar.offsetHeight;
        let id = setInterval(frame, 5);

        function frame() {
            if (height >= 40) {
                that.options.onToolbarSend && (that.toolbarSend.style.display = "flex");
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

        this.options.onToolbarSend && (this.toolbarSend.style.display = "none");
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

        toolbar.classList.add("toolbar");
        toolbar.style.display = "flex";
        toolbar.style.justifyContent = "space-between";
        toolbar.style.alignItems = "center";
        toolbar.style.flexWrap = "wrap";
        toolbar.style.minHeight = this.options.toolbarHide ? "0" : "40px";
        toolbar.style.position = "relative";

        this.toolbarOptionsGroup.classList.add("toolbar-options");
        this.toolbarOptionsGroup.style.margin = "0 10px";
        this.toolbarOptionsGroup.style.display = this.options.toolbarHide ? "none" : "flex";

        //iterate groups
        groups.forEach((group) => {
            // add menu to toolbarOptions
            const toolbarMenu = document.createElement("div");
            // const toolbarMenuIcon = document.createElement("i");

            toolbarMenu.classList.add("toolbar-menu");
            toolbarMenu.id = `menu-${group}`;

            // toolbarMenuIcon.classList.add(this.options.fontPack);
            // toolbarMenuIcon.classList.add(this.optionGroups[group].menu);

            toolbarMenu.appendChild(this.constructSVG(this.optionGroups[group].menu));
            this.toolbarOptionsGroup.appendChild(toolbarMenu);

            // add group to toolbarOptions
            const toolbarGroup = document.createElement("div");

            toolbarGroup.classList.add("toolbar-group");
            toolbarGroup.id = `group-${group}`;

            this.options.toolbarOptions.forEach((option) => {
                const toolbarOption = this.optionGroups[group].group.filter(group => group[option])[0];
                if (toolbarOption) {
                    const svgData = toolbarOption[option];
                    const optionSpan = this.constructSVG(svgData);

                    optionSpan.id = `toolbar-${option}`;
                    optionSpan.style.margin = "0 10px";

                    toolbarGroup.appendChild(optionSpan);
                }
            })

            this.toolbarOptionsGroup.appendChild(toolbarGroup);

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

            this.customToolbarMenu.classList.add("toolbar-menu");
            this.customToolbarMenu.id = `menu-custom`;

            const customSVGViewBox = "0 0 1792 1792";
            const customSVGD = "M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z";

            this.customToolbarMenu.appendChild(this.constructSVG({ viewBox: customSVGViewBox, d: customSVGD }));
            this.toolbarOptionsGroup.appendChild(this.customToolbarMenu);

            this.customToolbarGroup = document.createElement("div");

            this.customToolbarGroup.classList.add("toolbar-group");
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

        //add toolbar-send
        const toolbarSend = document.createElement("div");
        // const toolbarSendIcon = document.createElement("i");
        toolbarSend.id = "toolbar-send";
        // toolbarSendIcon.classList.add(this.options.fontPack);
        // toolbarSendIcon.classList.add("fa-paper-plane");

        toolbarSend.style.display = "none";
        toolbarSend.style.color = "#fff";
        toolbarSend.style.backgroundColor = "#5cb85c";
        toolbarSend.style.minHeight = this.options.toolbarHide
            ? "40px"
            : this.toolbar.style.minHeight;
        toolbarSend.style.width = "50px";
        toolbarSend.style.textAlign = "center";
        toolbarSend.style.justifyContent = "center";
        toolbarSend.style.alignContent = "center";
        toolbarSend.style.alignItems = "center";
        toolbarSend.style.cursor = "pointer";
        toolbarSend.style.border = "1px solid #4cae4c";
        toolbarSend.style.alignSelf = "flex-end";
        this.options.onToolbarSend && (toolbarSend.onclick = () => this.options.onToolbarSend());
        this.options.onToolbarSend && !this.options.toolbarHide && (toolbarSend.style.display = "flex");

        toolbarSend.onmouseenter = () =>
            (toolbarSend.style.backgroundColor = "#4cae4c");

        toolbarSend.onmouseleave = () =>
            (toolbarSend.style.backgroundColor = "#5cb85c");


        const toolbarSendSVG = this.constructSVG({ viewBox: "0 0 1792 1792", d: "M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" });
        toolbarSendSVG.querySelector('path').setAttribute("fill", "#fff");
        toolbarSend.appendChild(toolbarSendSVG);
        toolbar.appendChild(toolbarSend);

        this.toolbarOptions = toolbar.querySelectorAll("span");
        this.toolbarGroups = [...toolbar.getElementsByClassName("toolbar-group")];
        this.toolbarMenus = [...toolbar.getElementsByClassName("toolbar-menu")];
        this.toolbarSend = toolbar.querySelector("#toolbar-send");

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
        body.classList.add("body");

        body.contentEditable = "true";
        body.style.outline = "none";
        body.style.padding = "10px 20px";

        body.style.height = this.editor.style.height;
        body.style.minHeight = this.editor.style.minHeight;
        body.style.maxHeight = this.editor.style.maxHeight;

        // Placeholder logic
        if (this.options.placeholder) {
            const placeholderNode = document.createElement("p");
            placeholderNode.id = "placeholder-node";
            placeholderNode.style.color = "#5f6368";
            placeholderNode.textContent = this.options.placeholder;

            body.append(placeholderNode);

            const bodyFocus = body.onfocus;
            body.onfocus = () => {
                bodyFocus && bodyFocus();
                (body.querySelector("#placeholder-node") === placeholderNode) && this.clearContent();
            }

            const bodyBlur = body.onblur;
            body.onblur = () => {
                bodyBlur && bodyBlur();
                (this.getTextContent() === "") && body.append(placeholderNode);
            }
        }

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
                    document.execCommand("insertImage", true, res);
                    this.options.uploadOnPaste && this.attachFile(dataURLtoFile(res, "pastedimage"));
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

        return body;
    }

    initLinkMenu() {
        const linkMenu = document.createElement("div");
        const linkMenuForm = document.createElement("div");
        const linkMenuButton = document.createElement("button");
        const linkMenuFormLabel = document.createElement("p");
        const linkMenuFormInput = document.createElement("input");

        linkMenu.id = "link-menu";
        linkMenuButton.textContent = "Insert Link";
        linkMenuFormLabel.textContent = "Web Address";
        linkMenuFormInput.type = "text";
        linkMenuFormLabel.style.margin = "8px 10px 8px 0";
        linkMenuFormLabel.style.fontSize = "14px";
        linkMenuButton.style.cursor = "pointer";

        linkMenu.dataset.active = "false";
        linkMenu.style.display = "none";
        linkMenu.style.position = "absolute";
        linkMenu.style.right = "10px";
        linkMenu.style.bottom = "10px";
        linkMenu.style.backgroundColor = "#fff";
        linkMenu.style.border = "2px solid #ddd";
        linkMenu.style.padding = "10px 20px";
        linkMenu.style.zIndex = "1000";

        linkMenuFormLabel.style.width = "100%";
        linkMenuFormLabel.style.textAlign = "right";
        linkMenuFormLabel.style.marginRight = "10px";

        linkMenuFormInput.style.outline = "none";
        linkMenuFormInput.style.padding = "0 5px";
        linkMenuFormInput.placeholder = "Insert a Link";

        linkMenuForm.style.display = "flex";
        linkMenuForm.style.justifyContent = "space-between";
        linkMenuForm.style.margin = "5px 0";

        linkMenuButton.style.float = "right";
        linkMenuButton.style.padding = "6px 12px";
        linkMenuButton.style.border = "1px solid #4cae4c";
        linkMenuButton.style.backgroundColor = "#5cb85c";
        linkMenuButton.style.fontSize = "14px";
        linkMenuButton.style.color = "#fff";
        linkMenuButton.style.outline = "none";

        linkMenuButton.onmouseenter = () =>
            (linkMenuButton.style.backgroundColor = "#4cae4c");
        linkMenuButton.onmouseleave = () =>
            (linkMenuButton.style.backgroundColor = "#5cb85c");

        linkMenuButton.onclick = e => {
            const linkValue = linkMenuFormInput.value;

            if (linkValue) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);
                document.execCommand("createLink", true, linkValue);

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
                bodyLinks[bodyLinks.length - 1].contentEditable = "false";

                linkMenuFormInput.value = "";
                this.toolbar.querySelector("#toolbar-link").onclick();
            } else {
                this.body.focus();
                this.closeLinkMenu();
            }
        };

        linkMenuForm.appendChild(linkMenuFormLabel);
        linkMenuForm.appendChild(linkMenuFormInput);

        linkMenu.appendChild(linkMenuForm);
        linkMenu.appendChild(linkMenuButton);

        return linkMenu;
    }

    initImageMenu() {
        const imageMenu = document.createElement("div");
        const imageMenuForm = document.createElement("div");
        const imageMenuButton = document.createElement("button");
        const imageMenuFormLabel = document.createElement("p");
        const imageMenuFormSourceInput = document.createElement("input");

        imageMenu.id = "image-menu";
        imageMenuButton.textContent = "Insert Image";
        imageMenuFormLabel.textContent = "Image URL";
        imageMenuFormSourceInput.type = "text";
        imageMenuFormLabel.style.margin = "8px 10px 8px 0";
        imageMenuFormLabel.style.fontSize = "14px";
        imageMenuButton.style.cursor = "pointer";

        imageMenu.dataset.active = "false";
        imageMenu.style.display = "none";
        imageMenu.style.position = "absolute";
        imageMenu.style.right = "10px";
        imageMenu.style.bottom = "10px";
        imageMenu.style.backgroundColor = "#fff";
        imageMenu.style.border = "2px solid #ddd";
        imageMenu.style.padding = "10px 20px";
        imageMenu.style.zIndex = "1000";

        imageMenuFormLabel.style.width = "100%";
        imageMenuFormLabel.style.textAlign = "right";
        imageMenuFormLabel.style.marginRight = "10px";

        imageMenuFormSourceInput.style.outline = "none";
        imageMenuFormSourceInput.style.padding = "0 5px";
        imageMenuFormSourceInput.placeholder = "Insert a Link";

        imageMenuForm.style.display = "flex";
        imageMenuForm.style.justifyContent = "space-between";
        imageMenuForm.style.margin = "5px 0";

        imageMenuButton.style.float = "right";
        imageMenuButton.style.padding = "6px 12px";
        imageMenuButton.style.border = "1px solid #4cae4c";
        imageMenuButton.style.backgroundColor = "#5cb85c";
        imageMenuButton.style.fontSize = "14px";
        imageMenuButton.style.color = "#fff";
        imageMenuButton.style.outline = "none";

        imageMenuButton.onmouseenter = () =>
            (imageMenuButton.style.backgroundColor = "#4cae4c");
        imageMenuButton.onmouseleave = () =>
            (imageMenuButton.style.backgroundColor = "#5cb85c");

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

        imageMenuWidthFormInput.placeholder = "Image Height";
        imageMenuWidthFormLabel.textContent = "Width";

        imageMenuButton.onclick = e => {
            const linkValue = imageMenuFormSourceInput.value;
            const heightValue = imageMenuHeightFormInput.value;
            const widthValue = imageMenuWidthFormInput.value;

            if (linkValue) {
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(this.range);
                document.execCommand("insertImage", true, linkValue);

                const imageTags = this.body.querySelectorAll("img");
                imageTags[imageTags.length - 1].style.height = `${heightValue}px`;
                imageTags[imageTags.length - 1].style.width = `${widthValue}px`;

                imageMenuHeightFormInput.value = "";
                imageMenuWidthFormInput.value = "";
                imageMenuFormSourceInput.value = "";
                this.toolbar.querySelector("#toolbar-image").onclick();
            } else {
                this.body.focus();
                this.closeImageMenu();
            }
        };

        imageMenu.appendChild(imageMenuHeightForm);
        imageMenu.appendChild(imageMenuWidthForm);
        imageMenu.appendChild(imageMenuForm);
        imageMenu.appendChild(imageMenuButton);

        return imageMenu;
    }

    initMetaDataSection() {
        const metaDataSection = document.createElement("div");
        metaDataSection.classList.add("metadata-section");

        metaDataSection.style.display = "flex";
        metaDataSection.style.flexWrap = "wrap";
        metaDataSection.style.zIndex = "500";

        return metaDataSection;
    }

    initFilesSection() {
        const filesSection = document.createElement("div");
        filesSection.classList.add("files-section");

        filesSection.style.display = "flex";
        filesSection.style.flexWrap = "wrap";
        filesSection.style.zIndex = "500";

        this.body.ondragenter = e => {
            this.body.style.backgroundColor = "#ddd";
        }

        this.body.ondragleave = e => {
            this.body.style.backgroundColor = "inherit";
        }

        this.body.ondrop = e => {
            this.body.style.backgroundColor = "inherit";
            e.preventDefault();

            const file = (e.dataTransfer.files && e.dataTransfer.files[0]);
            this.attachFile(file);
        }

        this.editor.getfiles = () => this.getFiles();
        return filesSection;
    }

    createFileElement(name, size) {
        const fileEl = document.createElement("div");
        const fileNameEl = document.createElement("h4");
        const fileSizeEl = document.createElement("p");
        const removeFileEl = document.createElement("p");

        fileNameEl.textContent = name;
        fileSizeEl.textContent = size;
        removeFileEl.textContent = "X";

        fileEl.dataset.fileindex = (this.files.length - 1);
        fileEl.style.width = "100%";
        fileEl.style.display = "flex";
        fileEl.style.flexDirection = "column";
        fileEl.style.margin = "10px";
        fileEl.style.position = "relative";

        fileNameEl.style.fontWeight = "bold";
        fileNameEl.style.margin = "0";
        fileSizeEl.style.fontSize = "12px";
        fileSizeEl.style.margin = "2px 0";

        removeFileEl.style.margin = "0";
        removeFileEl.style.userSelect = "none";
        removeFileEl.style.color = "black";
        removeFileEl.style.position = "absolute";
        removeFileEl.style.right = "5px";
        removeFileEl.style.top = "-5px";
        removeFileEl.style.cursor = "pointer";
        removeFileEl.style.backgroundColor = "#fff";
        removeFileEl.onmouseenter = () => removeFileEl.style.color = "#ddd";
        removeFileEl.onmouseleave = () => removeFileEl.style.color = "black";

        removeFileEl.onclick = e => {
            this.files.splice(e.target.parentElement.dataset.fileindex, 1);
            e.target.parentElement.remove();
        }

        fileEl.appendChild(fileNameEl);
        fileEl.appendChild(fileSizeEl);
        fileEl.appendChild(removeFileEl);

        this.filesSection.appendChild(fileEl);
        this.editor.getfiles = () => this.getFiles();
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

        metaItemEl.style.width = "100%";
        metaItemEl.style.display = "flex";
        metaItemEl.style.margin = "10px";
        metaItemEl.style.position = "relative";

        metaImageEl.style.marginRight = "10px";
        metaImageEl.style.height = "50px";
        metaImageEl.style.width = "75px";

        metaDataTitleEl.style.fontWeight = "bold";
        metaDataTitleEl.style.margin = "0";
        metaDataDescriptionEl.style.margin = "0";

        removeMetaDataEl.style.userSelect = "none";
        removeMetaDataEl.style.color = "black";
        removeMetaDataEl.style.position = "absolute";
        removeMetaDataEl.style.right = "5px";
        removeMetaDataEl.style.top = "-5px";
        removeMetaDataEl.style.cursor = "pointer";
        removeMetaDataEl.style.backgroundColor = "#fff";
        removeMetaDataEl.onmouseenter = () => removeMetaDataEl.style.color = "#ddd";
        removeMetaDataEl.onmouseleave = () => removeMetaDataEl.style.color = "black";

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
        const height = "16";
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
                        group.style.bottom = isResponsive ? "5px" : "inherit";
                        group.style.right = isResponsive ? `5px` : "inherit";
                        group.style.backgroundColor = isResponsive ? "#fff" : "inherit";
                        group.style.border = isResponsive ? "2px solid #ddd" : "none";
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
                            selectedGroup.style.padding = "5px";
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

        this.body.onkeypress = () => this.overflow();
    }

    getFiles() {
        return this.files;
    }

    getContent() {
        if (this.body.querySelector("#placeholder-node")) {
            return "";
        } else {
            return this.body.innerHTML;
        }
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
        this.body.style.transition = "background-color .5s";
        this.body.style.backgroundColor = "#d9534f";
        setTimeout(() => {
            this.body.style.backgroundColor = "inherit";
            setTimeout(() => this.body.style.transition = "none", 500);
        }, 500);
    }

    openLinkMenu() {
        this.closeImageMenu();
        this.linkMenu.dataset.active = "true";
        this.linkMenu.style.display = "block";
    }

    openImageMenu() {
        this.closeLinkMenu();
        this.imageMenu.dataset.active = "true";
        this.imageMenu.style.display = "block";
    }

    closeLinkMenu() {
        this.linkMenu.dataset.active = "false";
        this.linkMenu.style.display = "none";
    }

    closeImageMenu() {
        this.imageMenu.dataset.active = "false";
        this.imageMenu.style.display = "none";
    }

    setContent(html) {
        this.clearContent();
        this.body.innerHTML = html;
    }

    clearContent() {
        this.body.innerHTML = "";
    }

    getTextContent() {
        if (this.body.querySelector("#placeholder-node")) {
            return "";
        } else {
            return this.body.textContent;
        }
    }

    scrubHTML(html) {
        const dirtyNode = document.createElement("div");
        const cleanNode = document.createElement("div");

        dirtyNode.innerHTML = html;
        cleanNode.append(document.createTextNode(dirtyNode.textContent));

        return cleanNode;
    }
}
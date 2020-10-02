const { assert } = chai;

mocha.setup("bdd");

function getEditor() {
    const editor = [...document.getElementsByClassName("striven-editor")].pop();
    return editor.StrivenEditor();
}

function node(content) {
    const node = document.createElement("div");
    node.innerHTML = content;
    return node;
}

/* Regression Tests */
describe("Regression Tests", () => {
    it("should not return script elements", () => {
        const se = getEditor();

        const content = `
    <p>This is some dangerous content!</p>
    <script>alert('hello');</script>
  `;

        se.setContent(content);
        const script = node(se.getContent()).querySelector("script");

        assert.notExists(script, "script tags were pruned");
        se.clearContent();
    });

    it("should create an ordered list with no content", () => {
        const se = getEditor();
        se.toolbar.querySelector("#toolbar-insertOrderedList").click();

        assert.exists(
            se.body.querySelector("ol"),
            "an ordered list was created"
        );
        se.clearContent();
    });

    it("should create an unordered list with no content", () => {
        const se = getEditor();
        se.toolbar.querySelector("#toolbar-insertUnorderedList").click();

        assert.exists(
            se.body.querySelector("ul"),
            "an unordered list was created"
        );
        se.clearContent();
    });

    it("should apply font style to content", (done) => {
        const se = getEditor();
        se.setContent("<p>Change me to Verdana</p>");

        setTimeout(() => {
            se.getRange().selectNode(se.body.querySelector("p"));
            se.toolbar.querySelector("#toolbar-fontName").click();
            se.editor
                .querySelector(
                    '.se-toolbar-popup-option[style="font-family: Verdana;"]'
                )
                .click();
            se.body.onfocus();
            setTimeout(() => {
                assert.exists(
                    se.body.querySelector('p font[face="Verdana"]'),
                    "selected font style was applied"
                );
                se.clearContent();
                done();
            }, 0);
        }, 200);
    });

    it("should apply font size to content", (done) => {
        const se = getEditor();
        se.setContent("<p>Change me to 36pt size</p>");

        setTimeout(() => {
            se.getRange().selectNode(se.body.querySelector("p"));
            se.toolbar.querySelector("#toolbar-fontSize").click();
            const option = [
                ...se.editor.querySelectorAll(".se-toolbar-popup-option"),
            ]
                .filter((opt) => opt.textContent === "36pt")
                .pop();
            option.click();
            se.body.onfocus();
            setTimeout(() => {
                assert.exists(
                    se.body.querySelector('font[size="7"]'),
                    "selected font size was applied"
                );
                se.clearContent();
                done();
            }, 0);
        }, 200);
    });

    it("should apply font format to content", (done) => {
        const se = getEditor();
        se.setContent("<p>Change me to an H1 format</p>");

        setTimeout(() => {
            se.getRange().selectNode(se.body.querySelector("p"));
            se.toolbar.querySelector("#toolbar-fontFormat").click();
            const option = [
                ...se.editor.querySelectorAll(".se-toolbar-popup-option"),
            ]
                .filter((opt) => opt.textContent === "Heading 1")
                .pop();
            option.click();
            se.body.onfocus();
            setTimeout(() => {
                assert.exists(
                    se.body.querySelector("h1"),
                    "selected font format was applied"
                );
                se.clearContent();
                done();
            }, 0);
        }, 200);
    });

    it("should apply a scroll bar for large content", () => {
        const se = getEditor();
        se.editor.setAttribute("max-height", "300px");
        se.body.style.maxHeight = "300px";

        let largeContent = "";
        for (let i = 0; i < 1000; i++) {
            largeContent += `<p>line ${i}</p>`;
        }

        se.setContent(largeContent);
        se.body.blur();

        assert.notEqual(
            se.body.scrollHeight,
            se.body.offsetHeight,
            "scroll bar was set"
        );
        se.clearContent();
        se.overflow();
    });

    it("should apply a scroll bar for large content after collapsing fullscreen", () => {
        const se = getEditor();
        se.editor.setAttribute("max-height", "300px");
        se.body.style.maxHeight = "300px";

        se.toolbar.querySelector("#toolbar-fullscreen").click();

        let largeContent = "";
        for (let i = 0; i < 1000; i++) {
            largeContent += `<p>line ${i}</p>`;
        }

        se.setContent(largeContent);
        se.toolbar.querySelector("#toolbar-fullscreen").click();

        assert.notEqual(
            se.body.scrollHeight,
            se.body.offsetHeight,
            "scroll bar was set"
        );
        se.clearContent();
        se.overflow();
    });

    it("should attach a file", (done) => {
        const se = getEditor();

        fetch(
            "https://raw.githubusercontent.com/striven-erp/striven-editor/master/LICENSE.txt"
        ).then((res) =>
            res.body
                .getReader()
                .read()
                .then((d) => {
                    se.attachFile(new File([new Blob(d.value)], "LICENSE.txt"));

                    const isAttached = se.getFiles().pop() instanceof File;
                    const elCreated =
                        se.filesSection.querySelector(".se-file .se-file-name")
                            .textContent === "LICENSE.txt";

                    assert.isTrue(isAttached && elCreated, "file was attached");
                    se.clearFiles();
                    done();
                })
        );
    });
    it("should apply strikethrough decoration to content", (done) => {
        const se = getEditor();
        se.setContent("<p>Strike Me Through</p>");
        se.getRange().selectNode(se.body.querySelector("p"));
        se.toolbar.querySelector("#toolbar-strikethrough").click();
        se.body.onfocus();
        assert.exists(
            se.body.querySelector("strike"),
            "strikethrough was applied"
        );
        se.clearContent();
        done();
    });
});

/* Internal Tests */
describe("Internal Tests", () => {
    it("should of been created", () => {
        assert.exists(getEditor().editor, "Editor is created");
    });

    it("should have a body", () => {
        assert.exists(getEditor().body, "Editor contains a body");
    });

    it("should have a toolbar", () => {
        assert.exists(getEditor().toolbar, "Editor contains a body");
    });
});

mocha.run();

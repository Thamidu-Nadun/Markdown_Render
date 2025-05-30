import MarkdownIt from "markdown-it";
import markdownItFootNote from "markdown-it-footnote";
import MarkdownItContainer from "markdown-it-container";
import { full as emoji } from 'markdown-it-emoji'
import { boxes } from "./lib/custom_calloutBox.js";

const md = new MarkdownIt({
    breaks: true,
    linkify: true,
})
    .use(markdownItFootNote)
    .use(emoji);

boxes.forEach(({ name, render }) => {
    md.use(MarkdownItContainer, name, { render });
});

const render = (content) => md.render(content);

export default render;

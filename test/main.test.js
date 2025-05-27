import { describe, test, expect } from 'vitest';
import render from '../src/main.js';

describe('Markdown Render Function', () => {
    test('renders a heading', () => {
        const input = '# Hello';
        const output = render(input);
        expect(output.trim()).toBe('<h1>Hello</h1>');
    });

    test('renders bold text', () => {
        const input = '**bold**';
        const output = render(input);
        expect(output).toContain('<strong>bold</strong>');
    });

    test('renders a tip container', () => {
        const input = '::: tip\nThis is a tip box.\n:::';
        const output = render(input);
        expect(output).toContain('TIP');
        expect(output).toContain('This is a tip box.');
        expect(output).toContain('TIP');
    });

    test('renders a footnote', () => {
        const input = 'Here is a footnote[^1].\n\n[^1]: This is the footnote.';
        const output = render(input);
        expect(output).toContain('<sup');
        expect(output).toContain('This is the footnote');
    });

    test('handles empty string', () => {
        const output = render('');
        expect(output.trim()).toBe('');
    });

    test('renders link automatically', () => {
        const input = 'Check out https://example.com';
        const output = render(input);
        expect(output).toContain('<a href="https://example.com"');
    });
});

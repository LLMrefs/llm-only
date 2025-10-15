import React from 'react';

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LLMOnly } from '../lib/index';

describe('LLMOnly', () => {
  const gptBotUserAgent =
    'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)';
  const humanUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';

  it('should render content when user agent is GPTBot', () => {
    render(
      <LLMOnly userAgent={gptBotUserAgent}>
        <div data-testid="llm-content">AI-only content</div>
      </LLMOnly>,
    );

    expect(screen.getByTestId('llm-content')).toBeInTheDocument();
    expect(screen.getByText('AI-only content')).toBeInTheDocument();
  });

  it('should not render content when user agent is a regular browser', () => {
    render(
      <LLMOnly userAgent={humanUserAgent}>
        <div data-testid="llm-content">AI-only content</div>
      </LLMOnly>,
    );

    expect(screen.queryByTestId('llm-content')).not.toBeInTheDocument();
  });

  it('should not render content when user agent is null', () => {
    render(
      <LLMOnly userAgent={null}>
        <div data-testid="llm-content">AI-only content</div>
      </LLMOnly>,
    );

    expect(screen.queryByTestId('llm-content')).not.toBeInTheDocument();
  });
});

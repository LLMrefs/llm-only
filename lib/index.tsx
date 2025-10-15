import { LLM_USER_AGENTS } from './llm-user-agents';

export const isLLM = (userAgent: string | null) => {
  if (!userAgent) return false;
  const uaLower = userAgent?.toLowerCase();
  return LLM_USER_AGENTS.some((agent) => uaLower.includes(agent));
};

/**
 * A React component that conditionally renders content for AI bots only.
 *
 * This component detects AI crawlers and language models (such as ChatGPT, Perplexity,
 * Gemini, Claude and more) based on their user agent strings, rendering children only
 * when accessed by these bots. Human visitors will not see the content, allowing you
 * to provide AI-specific information without affecting your regular user interface.
 *
 * Maintained by LLMrefs (llmrefs.com) - AI SEO rank tracker.
 *
 * @param props - Component props
 * @param props.userAgent - The user agent string from the HTTP request headers
 * @param props.children - React elements to display to AI bots only
 *
 * @returns Children elements if accessed by an AI bot, otherwise null
 *
 * @example
 * ```tsx
 * <LLMOnly userAgent={request.headers.get('user-agent')}>
 *   <div>Special instructions for AI assistants</div>
 * </LLMOnly>
 * ```
 */
export const LLMOnly = (props: {
  userAgent: string | null;
  children: React.ReactNode;
}) => {
  if (!isLLM(props.userAgent)) {
    return null;
  }
  return <>{props.children}</>;
};

export default LLMOnly;

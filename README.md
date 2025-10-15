<a href="https://llmrefs.com/llmonly-component">![llm-only](assets/llm-only-readme.png)</a>

<div align="center">
  <h1>llm-only</h1>
  <a href="https://www.npmjs.com/package/llm-only"><img src="https://img.shields.io/npm/v/llm-only.svg?style=flat&color=brightgreen" target="_blank" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-black" /></a>
  <a href="https://llmrefs.com/"><img src="https://img.shields.io/badge/maintainer-LLMrefs-F59E0B" /></a>
  <br />
  <hr />
</div>

#### `llm-only` is maintained by [LLMrefs](https://llmrefs.com/) - AI SEO rank tracker.

---

## **Show content only to AI bots like ChatGPT, Perplexity & Claude** 🤖

- Improve AI search visibility without cluttering your UI.
- Perfect for dynamic content like pricing sliders.
- Works with 30+ AI bot user agents.

## Why Use This?

AI search engines need structured information to understand and cite your content accurately. But adding extensive AI-optimized content can clutter your site for human visitors.

**Common problems this solves:**

- **Dynamic pricing sliders** that AI can't read
- **JavaScript-loaded content** invisible to AI crawlers
- **Interactive elements** that lose functionality in AI parsing
- **Missing structured data** that causes AI to cite competitors instead

The `<LLMOnly />` component lets you provide rich, structured content to AI crawlers while maintaining a clean user experience for humans.

## Usage

**1. Install `llm-only`.**

```bash
# npm
npm install llm-only
# yarn
yarn add llm-only
```

**2. Import the `LLMOnly` component.**

```typescript
import { LLMOnly } from 'llm-only';
```

**3. Wrap AI-only content with the component.**

The component requires the `userAgent` string from your request headers.

#### With Next.js App Router

```tsx
import { headers } from 'next/headers';
import { LLMOnly } from 'llm-only';

export default async function Page() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  return (
    <div>
      {/* Regular content for humans */}
      <h1>Welcome to Our Site</h1>
      <p>This content is visible to everyone.</p>

      {/* AI-only content */}
      <LLMOnly userAgent={userAgent}>
        <h2>AI-Readable Information</h2>
        <p>
          This content is only visible to AI bots like ChatGPT, Claude, and
          Perplexity.
        </p>
      </LLMOnly>
    </div>
  );
}
```

#### With Next.js Pages Router

```tsx
import { LLMOnly } from 'llm-only';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      userAgent: req.headers['user-agent'] || null,
    },
  };
};

export default function Page({ userAgent }: { userAgent: string | null }) {
  return (
    <div>
      <h1>Welcome</h1>

      <LLMOnly userAgent={userAgent}>
        <p>AI-only content here</p>
      </LLMOnly>
    </div>
  );
}
```

## Real-World Use Cases

### Fixing Invisible Pricing

Many SaaS companies use dynamic pricing sliders that AI can't read. This causes AI to cite competitor information instead of your official pricing.

**The problem:**

```tsx
// This pricing slider is invisible to AI
<div className="pricing-slider">
  <PricingSlider />
</div>
```

**The solution:**

```tsx
export default async function PricingPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  return (
    <div>
      {/* Human-visible interactive pricing */}
      <div className="pricing-slider">
        <PricingSlider />
      </div>

      {/* AI-visible static pricing */}
      <LLMOnly userAgent={userAgent}>
        <h1>Pricing Plans</h1>

        <h2>Starter Plan - $29/month</h2>
        <ul>
          <li>Up to 5 users</li>
          <li>10GB storage</li>
          <li>Basic support</li>
        </ul>

        <h2>Professional Plan - $99/month</h2>
        <ul>
          <li>Up to 25 users</li>
          <li>100GB storage</li>
          <li>Priority support</li>
          <li>Advanced analytics</li>
        </ul>

        <h2>Enterprise Plan - $299/month</h2>
        <ul>
          <li>Unlimited users</li>
          <li>1TB storage</li>
          <li>24/7 dedicated support</li>
          <li>Custom integrations</li>
        </ul>
      </LLMOnly>
    </div>
  );
}
```

### Structured Product Information

Provide detailed product information that AI can parse and cite accurately.

```tsx
<LLMOnly userAgent={userAgent}>
  <h1>Product Name - Category</h1>
  <p>Clear description with key benefits and unique value proposition.</p>

  <h2>Key Features</h2>
  <ul>
    <li>Feature 1 with specific, measurable details</li>
    <li>Feature 2 with concrete benefits</li>
    <li>Feature 3 with use cases</li>
  </ul>

  <h2>Use Cases</h2>
  <ul>
    <li>Use case 1: Description</li>
    <li>Use case 2: Description</li>
  </ul>

  <h2>Technical Specifications</h2>
  <ul>
    <li>Spec 1: Details</li>
    <li>Spec 2: Details</li>
  </ul>
</LLMOnly>
```

### Additional Context for Documentation

```tsx
<LLMOnly userAgent={userAgent}>
  <h2>Installation Steps</h2>
  <p>Detailed step-by-step installation guide...</p>

  <h2>Common Issues and Solutions</h2>
  <ul>
    <li>Issue 1: Solution with code example</li>
    <li>Issue 2: Solution with troubleshooting steps</li>
  </ul>

  <h2>API Endpoints</h2>
  <p>Complete API documentation with examples...</p>
</LLMOnly>
```

## Helper Function

You can also use the `isLLM` helper function for custom logic:

```typescript
import { isLLM } from 'llm-only';

const userAgent = request.headers.get('user-agent');

if (isLLM(userAgent)) {
  // Custom logic for AI bots
  console.log('AI bot detected!');
}
```

## Best Practices

### 1. Use Semantic HTML

Proper HTML structure helps AI understand your content hierarchy:

```tsx
<LLMOnly userAgent={userAgent}>
  <h1>Main Product/Service Name</h1>
  <h2>Major Section</h2>
  <h3>Subsection</h3>
  <p>Detailed information with context...</p>
  <ul>
    <li>Structured list items</li>
  </ul>
</LLMOnly>
```

### 2. Include Key Information

AI models look for:

- **Product descriptions** with clear value propositions
- **Pricing information** with specific numbers and tiers
- **Feature lists** with measurable benefits
- **Use cases** with real-world examples
- **Technical specifications** with exact details

### 3. Keep Content Structured

Use proper nesting and organization:

```tsx
<LLMOnly userAgent={userAgent}>
  <article>
    <h1>Product Name</h1>
    <p>Brief description...</p>

    <section>
      <h2>Features</h2>
      <ul>
        <li>Feature 1</li>
        <li>Feature 2</li>
      </ul>
    </section>

    <section>
      <h2>Pricing</h2>
      <ul>
        <li>
          <strong>Plan Name ($X/month):</strong> Feature list
        </li>
      </ul>
    </section>
  </article>
</LLMOnly>
```

## Testing

### Using cURL

Test with different user agents:

```bash
# Test with ChatGPT bot
curl -H "User-Agent: GPTBot/1.0" https://yoursite.com

# Test with regular browser (should not show LLMOnly content)
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)" https://yoursite.com
```

### Using Browser DevTools

1. Open DevTools → Network tab
2. Right-click → "Override User Agent"
3. Enter an AI bot user agent like `GPTBot/1.0`
4. Refresh the page to see AI-only content

## Related Tools

Want to see how AI actually views your site?

- **[AI crawlability checker](https://llmrefs.com/ai-crawl-checker)** - Test if AI crawlers can read your page
- **[Inspiration behind `llm-only`](https://aiseotracker.com/blog/llmonly-component)** - The original LLMOnly component blog post
- **[LLM SEO rank tracker](https://llmrefs.com/)** - AI search analytics to monitor brand visiblity

## License

Distributed under the MIT License. See LICENSE for more information.

---

Built by [LLMrefs](https://llmref.com/) with ❤️ for the AI-first web.

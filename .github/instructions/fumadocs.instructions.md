---
applyTo: '**'
---

### Generate Package Install Code Blocks

Source: https://fumadocs.dev/docs/headless/mdx/install

Example of how to create code blocks for package installation using the `package-install` language. This is rendered by the `remarkInstall` plugin.

```markdown
```package-install
my-package
```

```package-install
npm i my-package -D
```
```

--------------------------------

### Create First MDX File

Source: https://fumadocs.dev/docs/ui

Example of creating the initial MDX file for documentation content. This file defines frontmatter (like title) and includes Markdown for content. It should be placed within the 'docs' folder.

```mdx
---
title: Hello World
---

## Yo what's up
```

--------------------------------

### Create an Example Fumadocs MDX Document

Source: https://fumadocs.dev/docs/ui/manual-installation/tanstack-start

An example of an MDX file to be placed in the `content/docs` directory. It demonstrates the frontmatter for setting the title and basic Markdown content.

```markdown
---
title: Hello World
---

I love Fumadocs
```

--------------------------------

### Setup Root Layout with Fumadocs Provider

Source: https://fumadocs.dev/docs/ui/manual-installation/next

Create app/layout.tsx to wrap the application with RootProvider from Fumadocs. This enables Fumadocs functionality across the entire app and applies required layout styles.

```typescript
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // required styles
        className="flex flex-col min-h-screen"
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
```

--------------------------------

### Install Fumadocs UI Components

Source: https://fumadocs.dev/docs/ui/manual-installation/next

Install Fumadocs UI package and core library for frontend documentation components. These packages provide pre-built React components and utilities for rendering documentation.

```bash
npm i fumadocs-ui fumadocs-core
```

--------------------------------

### Fumadocs Root Provider for Waku (TypeScript React)

Source: https://fumadocs.dev/docs/ui/manual-installation/waku

Wraps the application with Fumadocs UI's `RootProvider` for Waku projects. This component is essential for enabling Fumadocs features across your application.

```typescriptreact
'use client';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/waku';

export function Provider({ children }: { children: ReactNode }) {
  return <RootProvider>{children}</RootProvider>;
}
```

--------------------------------

### Run Fumadocs Development Server (npm)

Source: https://fumadocs.dev/docs/ui

Command to start the Fumadocs application in development mode. This allows for live previewing of documentation changes. Compatible with npm, pnpm, yarn, and bun.

```bash
npm run dev
```

--------------------------------

### Waku Docs Layout Component (TypeScript React)

Source: https://fumadocs.dev/docs/ui/manual-installation/waku

Sets up the main layout for documentation pages in a Waku project using Fumadocs UI's `DocsLayout`. It integrates shared layout options and the page tree from the source.

```typescriptreact
import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={source.pageTree}>
      {children}
    </DocsLayout>
  );
}
```

--------------------------------

### Install Mermaid and Theme Dependencies

Source: https://fumadocs.dev/docs/ui/markdown/mermaid

Install required npm packages for Mermaid diagram rendering and Next.js theme management. These dependencies enable diagram rendering and light/dark mode switching in Fumadocs.

```bash
npm install mermaid next-themes
```

--------------------------------

### Install Fumadocs Core and UI Packages

Source: https://fumadocs.dev/docs/ui/manual-installation/tanstack-start

Installs the core Fumadocs package and the UI components for integration with your project. These are the fundamental packages required to use Fumadocs.

```bash
npm i fumadocs-core fumadocs-ui
```

--------------------------------

### Install Fumadocs CLI

Source: https://fumadocs.dev/docs/cli

Installs the Fumadocs CLI tool. This command initializes the configuration for the CLI, allowing further customization of component output paths. No external dependencies are required beyond a package manager.

```bash
npx @fumadocs/cli
```

--------------------------------

### Create Sample MDX Documentation Page

Source: https://fumadocs.dev/docs/ui/manual-installation/next

Create content/docs/index.mdx to add your first documentation page. This MDX file uses frontmatter metadata and markdown content that will be processed and served by Fumadocs.

```markdown
---
title: Hello World
---

## Introduction

I love Anime.
```

--------------------------------

### Initialize Fumadocs App (npm)

Source: https://fumadocs.dev/docs/ui

This command initiates the creation of a new Fumadocs application using npm. It prompts the user to select a framework (like Next.js) and a content source (like Fumadocs MDX). A minimum Node.js version of 20 is required.

```bash
npm create fumadocs-app
```

--------------------------------

### Create Dynamic Navigation Link

Source: https://fumadocs.dev/docs/ui/internationalization/tanstack-start

Provides an example of creating a dynamic navigation link that accounts for the language parameter in the URL. This is useful for linking to pages within the i18n routing structure.

```typescript
import { Link, useParams } from '@tanstack/react-router';

const { lang } = useParams({ from: '/$lang/' });

<Link
  to="/$lang/docs/$"
  params={{
    lang,
    _splat: '',
  }}
>
  Open Docs
</Link>;
```

--------------------------------

### Install Fumadocs Packages (npm)

Source: https://fumadocs.dev/docs/mdx/next

Installs the core Fumadocs MDX packages and type definitions for MDX using npm. This is the initial step to enable Fumadocs functionality in your project.

```bash
npm i fumadocs-mdx fumadocs-core @types/mdx
```

--------------------------------

### Wrap app with Fumadocs RootProvider

Source: https://fumadocs.dev/docs/ui/manual-installation/react-router

Set up the root layout component with Fumadocs RootProvider to enable documentation features across the entire application. Includes essential React Router components and styles.

```typescript
import { Links, Meta, Scripts, ScrollRestoration } from 'react-router';
import { RootProvider } from 'fumadocs-ui/provider/react-router';
import './app.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

--------------------------------

### Configure React Router routes

Source: https://fumadocs.dev/docs/ui/manual-installation/react-router

Set up React Router configuration with routes for home page, documentation pages with wildcard matching, and API search endpoint. This enables the documentation routing structure.

```typescript
import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('docs/*', 'docs/page.tsx'),
  route('api/search', 'docs/search.ts'),
] satisfies RouteConfig;
```

--------------------------------

### Configure Persistent Tabs with remarkInstall Options

Source: https://fumadocs.dev/docs/headless/mdx/install

Example of configuring the `remarkInstall` plugin with options to enable persistent tabs in Fumadocs UI. The `persist` option requires an `id` for grouping.

```typescript
import { remarkInstall } from 'fumadocs-docgen';
import { defineConfig } from 'fumadocs-mdx/config';

const remarkInstallOptions = {
  persist: {
    id: 'some-id',
  },
};

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkInstall, remarkInstallOptions]],
  },
});
```

--------------------------------

### Install fumadocs-docgen Package

Source: https://fumadocs.dev/docs/headless/mdx/install

Command to install the `fumadocs-docgen` package using npm. This is the primary package required for generating package installation code blocks.

```bash
npm install fumadocs-docgen
```

--------------------------------

### Install Content Collections MDX

Source: https://fumadocs.dev/docs/headless/content-collections

Installs the necessary package for integrating Content Collections with MDX files. This is a prerequisite for using MDX content within Fumadocs.

```bash
npm i @content-collections/mdx
```

--------------------------------

### Setup Root Provider for i18n UI

Source: https://fumadocs.dev/docs/ui/internationalization/tanstack-start

Sets up the root provider for internationalized UI components in a Tanstack Start application. It integrates Fumadocs UI's i18n capabilities with the application's i18n configuration and provides translations for UI elements like display names and search.

```typescript
import { HeadContent, Scripts, useParams } from '@tanstack/react-router';
import * as React from 'react';
import { RootProvider } from 'fumadocs-ui/provider/base';
import { TanstackProvider } from 'fumadocs-core/framework/tanstack';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

const { provider } = defineI18nUI(i18n, {
  translations: {
    cn: {
      displayName: 'Chinese',
      search: 'Translated Content',
    },
    en: {
      displayName: 'English',
    },
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { lang } = useParams({ strict: false });

  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <TanstackProvider>
          <RootProvider
            i18n={provider(lang)}
          >
            {children}
          </RootProvider>
        </TanstackProvider>
        <Scripts />
      </body>
    </html>
  );
}
```

--------------------------------

### Create Shared Layout Options (TypeScript React)

Source: https://fumadocs.dev/docs/ui/manual-installation/waku

Defines a function `baseOptions` that returns shared layout properties for Fumadocs UI in a Waku project. This includes setting the navigation title.

```typescriptreact
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Waku',
    },
  };
}
```

--------------------------------

### Set Up Fumadocs Root Provider in Tanstack Router

Source: https://fumadocs.dev/docs/ui/manual-installation/tanstack-start

Wraps your entire Tanstack Router application with the Fumadocs UI provider. This makes Fumadocs components and context available throughout your app. It requires the Tanstack Router setup to be in place.

```typescript
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import * as React from 'react';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Scripts />
      </body>
    </html>
  );
}
```

--------------------------------

### Create Fumadocs layout configuration

Source: https://fumadocs.dev/docs/ui/manual-installation/react-router

Define the base layout options for Fumadocs UI, including navigation title and other shared layout properties. This file centralizes layout configuration for the documentation.

```typescript
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'React Router',
    },
  };
}
```

--------------------------------

### Configure remarkInstall Plugin in Fumadocs MDX

Source: https://fumadocs.dev/docs/headless/mdx/install

Configures the MDX compiler in `source.config.ts` to use the `remarkInstall` plugin from `fumadocs-docgen`. This enables the generation of package installation code blocks.

```typescript
import { remarkInstall } from 'fumadocs-docgen';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall],
  },
});
```

--------------------------------

### Example Fumadocs UI Files Component Output (TSX)

Source: https://fumadocs.dev/docs/cli

An example of the TSX output generated by the Fumadocs CLI for the 'Files' component. This code demonstrates how to structure folders and files using `Folder` and `File` components from 'fumadocs-ui/components/files'.

```tsx
import { File, Folder, Files } from 'fumadocs-ui/components/files';

export default (
  <Files>
    <Folder name="app">
      <File name="layout.tsx" />
      <File name="page.tsx" />
      <File name="global.css" />
    </Folder>
    <Folder name="components">
      <File name="button.tsx" />
      <File name="tabs.tsx" />
      <File name="dialog.tsx" />
    </Folder>
    <File name="package.json" />
  </Files>
);
```

--------------------------------

### Configure Shared Layout Options

Source: https://fumadocs.dev/docs/ui/manual-installation/next

Create lib/layout.shared.tsx to define shared BaseLayoutProps for documentation layouts. This file centralizes layout configuration like navigation title used across multiple page layouts.

```typescript
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'DevSecForge.io',
    },
  };
}
```

--------------------------------

### Install create-fumadocs-app using npm

Source: https://fumadocs.dev/docs/cli/create-fumadocs-app

Installs the `create-fumadocs-app` package using npm. This is a prerequisite for using the CLI tool.

```bash
npm install create-fumadocs-app
```

--------------------------------

### Install fumadocs-core with npm

Source: https://fumadocs.dev/docs/headless

Installs the fumadocs-core library using npm. No other dependencies are required for the core library itself.

```bash
npm install fumadocs-core
```

--------------------------------

### Define MDX Components for Fumadocs UI

Source: https://fumadocs.dev/docs/headless/mdx/install

Sets up custom MDX components in `mdx-components.tsx` for Fumadocs UI, including `Tab` and `Tabs`. These components are used to render interactive package installation interfaces.

```typescript
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import defaultComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Tab,
    Tabs,
    ...components,
  };
}
```

--------------------------------

### Install Fumadocs CLI

Source: https://fumadocs.dev/docs/ui/layouts/home-layout

Installs the Fumadocs CLI to enable advanced customization beyond supported options. This is useful for tailoring the layout to specific project needs.

```bash
npx @fumadocs/cli@latest customise
```

--------------------------------

### Create User API Request Examples

Source: https://fumadocs.dev/docs/openapi/createUser

Examples for creating a user account via the API. Includes cURL, JavaScript, Python, Java, and C# implementations. The request body requires name, email, and password.

```curl
curl -X POST "https://galaxy.scalar.com/user/signup" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Marc",
    "email": "marc@scalar.com",
    "password": "i-love-scalar"
  }'
```

```javascript
// JavaScript example would go here
```

```python
# Python example would go here
```

```java
// Java example would go here
```

```csharp
// C# example would go here
```

--------------------------------

### Install Math Packages (npm/pnpm/yarn/bun)

Source: https://fumadocs.dev/docs/ui/markdown/math

Installs the remark-math and rehype-katex packages, along with KaTeX, which are necessary for rendering math equations.

```bash
npm install remark-math rehype-katex katex
```

--------------------------------

### Create Planet - Go Request Example

Source: https://fumadocs.dev/docs/openapi/createPlanet

Example Go code to create a new planet using the `net/http` package. It shows how to construct the request, set headers for authentication and content type, and send the JSON payload.

```go
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Planet struct {
	Name               string              `json:"name"`
	Description        string              `json:"description,omitempty"`
	Type               string              `json:"type,omitempty"`
	HabitabilityIndex  float64             `json:"habitabilityIndex,omitempty"`
	PhysicalProperties *PhysicalProperties `json:"physicalProperties,omitempty"`
	Atmosphere         []Atmosphere        `json:"atmosphere,omitempty"`
	DiscoveredAt       string              `json:"discoveredAt,omitempty"`
	Image              string              `json:"image,omitempty"`
	Satellites         []Satellite         `json:"satellites,omitempty"`
	Creator            *User               `json:"creator,omitempty"`
	Tags               []string            `json:"tags,omitempty"`
	successCallbackUrl string              `json:"successCallbackUrl,omitempty"`
	failureCallbackUrl string              `json:"failureCallbackUrl,omitempty"`
}

type PhysicalProperties struct {
	Mass        float64 `json:"mass,omitempty"`
	Radius      bool    `json:"radius,omitempty"`
	Gravity     float64 `json:"gravity,omitempty"`
	Temperature Temperature `json:"temperature,omitempty"`
}

type Temperature struct {
	Min     int `json:"min,omitempty"`
	Max     int `json:"max,omitempty"`
	Average int `json:"average,omitempty"`
}

type Atmosphere struct {
	Compound   string  `json:"compound,omitempty"`
	Percentage float64 `json:"percentage,omitempty"`
}

type Satellite struct {
	Name     string  `json:"name,omitempty"`
	Diameter float64 `json:"diameter,omitempty"`
}

type User struct {
	id   int    `json:"id,omitempty"`
	Name string `json:"name,omitempty"`
}

func main() {
	planetData := Planet{
		Name: "Mars",
		Description: "The red planet",
		Type: "terrestrial",
		HabitabilityIndex: 0.68,
		PhysicalProperties: &PhysicalProperties{
			Mass:    0.107,
			Radius:  true,
			Gravity: 0.378,
			Temperature: Temperature{
				Min:     130,
				Max:     308,
				Average: 210,
			},
		},
		Atmosphere: []Atmosphere{
			{Compound: "CO2", Percentage: 95.3},
		},
		DiscoveredAt: "1610-01-07T00:00:00Z",
		Image: "https://cdn.scalar.com/photos/mars.jpg",
		Satellites: []Satellite{
			{Name: "Phobos", Diameter: 22.2},
		},
		Creator: &User{ID: 1, Name: "Marc"},
		Tags: []string{"solar-system", "rocky", "explored"},
		successCallbackUrl: "https://example.com/webhook",
		failureCallbackUrl: "https://example.com/webhook",
	}

	jsonData, err := json.Marshal(planetData)
	if err != nil {
		fmt.Println("Error marshalling JSON:", err)
		return
	}

	url := "https://galaxy.scalar.com/planets"
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	req.Header.Set("Authorization", "Bearer YOUR_JWT_TOKEN")
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer res.Body.Close()

	fmt.Println("Status Code:", res.StatusCode)

	var result map[string]interface{}
	err = json.NewDecoder(res.Body).Decode(&result)
	if err != nil {
		fmt.Println("Error decoding response:", err)
		return
	}

	fmt.Printf("%+v\n", result)
}
```

--------------------------------

### Install Fumadocs OpenAPI and Shiki

Source: https://fumadocs.dev/docs/ui/openapi

Installs the necessary npm packages for OpenAPI integration and syntax highlighting. This is the first step in setting up manual OpenAPI documentation.

```bash
npm i fumadocs-openapi shiki
```

--------------------------------

### Create Planet - Java Request Example

Source: https://fumadocs.dev/docs/openapi/createPlanet

Example Java code using Apache HttpClient to create a new planet. It demonstrates setting headers, constructing the JSON payload, and handling the response.

```java
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class CreatePlanet {

    public static void main(String[] args) {
        // Replace with your actual JWT token
        String token = "YOUR_JWT_TOKEN"; 
        String url = "https://galaxy.scalar.com/planets";

        // Example planet data (ensure this structure matches your JSON)
        String jsonPayload = "{\"name\": \"Mars\", \"description\": \"The red planet\", \"type\": \"terrestrial\", \"habitabilityIndex\": 0.68, \"physicalProperties\": { \"mass\": 0.107, \"radius\": true, \"gravity\": 0.378, \"temperature\": { \"min\": 130, \"max\": 308, \"average\": 210 } }, \"atmosphere\": [ { \"compound\": \"CO2\", \"percentage\": 95.3 } ], \"discoveredAt\": \"1610-01-07T00:00:00Z\", \"image\": \"https://cdn.scalar.com/photos/mars.jpg\", \"satellites\": [ { \"name\": \"Phobos\", \"diameter\": 22.2 } ], \"creator\": { \"id\": 1, \"name\": \"Marc\" }, \"tags\": [ \"solar-system\", \"rocky\", \"explored\" ], \"successCallbackUrl\": \"https://example.com/webhook\", \"failureCallbackUrl\": \"https://example.com/webhook\" }";

        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpPost request = new HttpPost(url);

            // Set headers
            request.setHeader("Authorization", "Bearer " + token);
            request.setHeader("Content-Type", "application/json");

            // Set JSON payload
            StringEntity entity = new StringEntity(jsonPayload, StandardCharsets.UTF_8);
            request.setEntity(entity);

            // Execute request
            var response = client.execute(request);
            var entityResponse = response.getEntity();
            var responseString = EntityUtils.toString(entityResponse, StandardCharsets.UTF_8);

            System.out.println("Status Code: " + response.getStatusLine().getStatusCode());
            System.out.println("Response Body: " + responseString);

            EntityUtils.consume(entityResponse); // Consume the entity to release connection

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

--------------------------------

### Basic DocsLayout Usage (TypeScript)

Source: https://fumadocs.dev/docs/ui/layouts/docs

Implement the DocsLayout component by passing your page tree and any additional options. This example shows a basic setup in a layout file.

```tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={tree}>
      {children}
    </DocsLayout>
  );
}
```

--------------------------------

### Install Orama Tokenizer for Special Languages

Source: https://fumadocs.dev/docs/headless/search/orama

Installs the Orama tokenizer package, which is required for handling special languages like Chinese and Japanese in Fumadocs search.

```bash
npm i @orama/tokenizers
```

--------------------------------

### Create Planet - C# Request Example

Source: https://fumadocs.dev/docs/openapi/createPlanet

Example C# code using `HttpClient` to create a new planet. This demonstrates setting the Authorization header and sending the JSON payload for planet creation.

```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

public class PlanetCreator
{
    public static async Task CreatePlanetAsync(string token, string jsonPayload)
    {
        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

            var url = "https://galaxy.scalar.com/planets";
            var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Planet created successfully:");
                    Console.WriteLine(responseBody);
                }
                else
                {
                    Console.WriteLine($"Error creating planet: {response.StatusCode}");
                    string errorBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine($"Error details: {errorBody}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An exception occurred: {ex.Message}");
            }
        }
    }

    // Example Usage:
    // public static async Task Main(string[] args)
    // {
    //     string jwtToken = "YOUR_JWT_TOKEN";
    //     string planetJson = @"{ 
    //         \"name\": \"Mars\", 
    //         \"description\": \"The red planet\", 
    //         \"type\": \"terrestrial\", 
    //         \"habitabilityIndex\": 0.68, 
    //         \"physicalProperties\": { \"mass\": 0.107, \"radius\": true, \"gravity\": 0.378, \"temperature\": { \"min\": 130, \"max\": 308, \"average\": 210 } }, 
    //         \"atmosphere\": [ { \"compound\": \"CO2\", \"percentage\": 95.3 } ], 
    //         \"discoveredAt\": \"1610-01-07T00:00:00Z\", 
    //         \"image\": \"https://cdn.scalar.com/photos/mars.jpg\", 
    //         \"satellites\": [ { \"name\": \"Phobos\", \"diameter\": 22.2 } ], 
    //         \"creator\": { \"id\": 1, \"name\": \"Marc\" }, 
    //         \"tags\": [ \"solar-system\", \"rocky\", \"explored\" ], 
    //         \"successCallbackUrl\": \"https://example.com/webhook\", 
    //         \"failureCallbackUrl\": \"https://example.com/webhook\" 
    //     }";
    //     await CreatePlanetAsync(jwtToken, planetJson);
    // }
}
```

--------------------------------

### Tanstack Start Integration for Browser Collections (TypeScript)

Source: https://fumadocs.dev/docs/mdx/entry/browser

Example of integrating Fumadocs browser collections with Tanstack Start. It showcases defining a file route, a server loader using `createServerFn`, and a client loader for rendering MDX content, ensuring optimal client-side performance.

```typescript
import { createFileRoute, notFound } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { source } from '@/lib/source';
import browserCollections from 'fumadocs-mdx:collections/browser';

export const Route = createFileRoute('/docs/$')({
  component: Page,
  loader: async ({ params }) => {
    const data = await loader({ data: params._splat?.split('/') ?? [] });
    await clientLoader.preload(data.path);
    return data;
  },
});

const loader = createServerFn({
  method: 'GET',
})
  .inputValidator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs);
    if (!page) throw notFound();

    return {
      path: page.path,
    };
  });

const clientLoader = browserCollections.docs.createClientLoader({
  component({ frontmatter, default: MDX }) {
    return (
      <div className="prose">
        <h1>{frontmatter.title}</h1>
        <MDX />
      </div>
    );
  },
});

function Page() {
  const data = Route.useLoaderData();
  const Content = clientLoader.getComponent(data.path);

  return <Content />;
}
```

--------------------------------

### Setup Search Server from Source

Source: https://fumadocs.dev/docs/headless/search/orama

This endpoint creates a search server directly from the source object, suitable for Next.js applications.

```APIDOC
## POST /api/search

### Description
Creates a search server directly from the source object.

### Method
GET

### Endpoint
/api/search

### Parameters
#### Query Parameters
- **language** (string) - Optional - The language to use for Orama search. Defaults to 'english'.

### Request Example
```typescript
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  language: 'english',
});
```

### Response
#### Success Response (200)
- **searchIndex** (object) - The generated search index.

#### Response Example
```json
{
  "searchIndex": {}
}
```
```

--------------------------------

### Use Mermaid Component in MDX Files

Source: https://fumadocs.dev/docs/ui/markdown/mermaid

Render Mermaid diagrams directly in MDX files by passing chart definition as a string prop to the Mermaid component. This example demonstrates a multi-layer architecture diagram with consumers and services.

```jsx
<Mermaid
  chart="
graph TD;
subgraph AA [Consumers]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
end
Z[GraphQL API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;"
/>
```

--------------------------------

### Define Fumadocs MDX Configuration

Source: https://fumadocs.dev/docs/mdx/vite

Creates a configuration file for Fumadocs MDX using `defineDocs`. Specifies the directory where documentation content will reside.

```typescript
import { defineDocs } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
});
```

--------------------------------

### Setup Search Server from Search Indexes

Source: https://fumadocs.dev/docs/headless/search/orama

This endpoint creates a search server from pre-generated search indexes, typically provided by your content source.

```APIDOC
## POST /api/search

### Description
Creates a search server from search indexes, where each index requires a `structuredData` field.

### Method
GET

### Endpoint
/api/search

### Parameters
#### Query Parameters
- **language** (string) - Optional - The language to use for Orama search. Defaults to 'english'.
- **indexes** (array) - Required - An array of search index objects, each containing `title`, `description`, `url`, `id`, and `structuredData`.

### Request Example
```typescript
import { source } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const { GET } = createSearchAPI('advanced', {
  language: 'english',
  indexes: source.getPages().map((page) => ({
    title: page.data.title,
    description: page.data.description,
    url: page.url,
    id: page.url,
    structuredData: page.data.structuredData,
  })),
});
```

### Response
#### Success Response (200)
- **searchIndex** (object) - The generated search index.

#### Response Example
```json
{
  "searchIndex": {}
}
```
```

--------------------------------

### Configure Next.js Provider for Fumadocs Core

Source: https://fumadocs.dev/docs/headless

Sets up the Next.js framework provider for Fumadocs Core components. This is necessary for components that rely on framework-specific context, such as routing.

```typescript
import type { ReactNode } from 'react';
import { NextProvider } from 'fumadocs-core/framework/next';

export function RootLayout({ children }: { children: ReactNode }) {
  // or if you're using Fumadocs UI, use `<RootProvider />`
  return <NextProvider>{children}</NextProvider>;
}
```

--------------------------------

### Create Planet - JavaScript Request Example

Source: https://fumadocs.dev/docs/openapi/createPlanet

Example JavaScript code using `fetch` to create a new planet. It demonstrates how to set up the request headers, including the Bearer token and Content-Type, and send a JSON body with the planet's details.

```javascript
async function createPlanet(token, planetData) {
  const response = await fetch('https://galaxy.scalar.com/planets', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(planetData)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

// Example usage:
const planetPayload = {
  "name": "Mars",
  "description": "The red planet",
  "type": "terrestrial",
  "habitabilityIndex": 0.68,
  "physicalProperties": {
    "mass": 0.107,
    "radius": true,
    "gravity": 0.378,
    "temperature": {
      "min": 130,
      "max": 308,
      "average": 210
    }
  },
  "atmosphere": [
    {
      "compound": "CO2",
      "percentage": 95.3
    }
  ],
  "discoveredAt": "1610-01-07T00:00:00Z",
  "image": "https://cdn.scalar.com/photos/mars.jpg",
  "satellites": [
    {
      "name": "Phobos",
      "diameter": 22.2
    }
  ],
  "creator": {
    "id": 1,
    "name": "Marc"
  },
  "tags": [
    "solar-system",
    "rocky",
    "explored"
  ],
  "successCallbackUrl": "https://example.com/webhook",
  "failureCallbackUrl": "https://example.com/webhook"
};

// Assuming you have a token
// createPlanet('YOUR_JWT_TOKEN', planetPayload)
//  .then(data => console.log('Planet created:', data))
//  .catch(error => console.error('Error creating planet:', error));
```

--------------------------------

### Export MDX Components Configuration

Source: https://fumadocs.dev/docs/ui/manual-installation/next

Create mdx-components.tsx to export MDX component configuration used by the documentation. This file merges default Fumadocs MDX components with custom components for rendering markdown content.

```typescript
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
  };
}
```

--------------------------------

### Setup Remark Files Plugin (TypeScript)

Source: https://fumadocs.dev/docs/headless/mdx/remark-mdx-files

Integrates the 'remarkMdxFiles' plugin into the Fumadocs MDX configuration. This setup requires importing the plugin and adding it to the 'remarkPlugins' array in the 'source.config.ts' file.

```typescript
import { remarkMdxFiles } from 'fumadocs-core/mdx-plugins';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxFiles],
  },
});
```

--------------------------------

### Install Fumadocs CLI Preset for OG Images

Source: https://fumadocs.dev/docs/ui/next-seo

This command installs the 'og/mono' preset for Fumadocs CLI, providing alternative styles for generating Open Graph images. After installation, you replace the default `generate` function with the one from the installed preset.

```bash
npx @fumadocs/cli@latest add og/mono
```

--------------------------------

### Create User API Response Examples

Source: https://fumadocs.dev/docs/openapi/createUser

Examples of API responses for user creation. Includes successful creation (201) and various error responses (400, 401, 403, 409, 422) with corresponding JSON payloads.

```json
{
  "id": 1,
  "name": "Marc"
}
```

```json
{
  "type": "https://example.com/errors/bad-request",
  "title": "Bad Request",
  "status": 400,
  "detail": "The request was invalid."
}
```

```json
{
  "type": "https://example.com/errors/not-found",
  "title": "Unauthorized",
  "status": 401,
  "detail": "You are not authorized to access this resource."
}
```

```json
{
  "type": "https://example.com/errors/forbidden",
  "title": "Forbidden",
  "status": 403,
  "detail": "You are not authorized to access this resource."
}
```

```json
{
  "type": "https://example.com/errors/conflict",
  "title": "Conflict",
  "status": 409,
  "detail": "The resource you are trying to access is in conflict."
}
```

```json
{
  "type": "https://example.com/errors/unprocessable-entity",
  "title": "Unprocessable Entity",
  "status": 422,
  "detail": "The request was invalid."
}
```

--------------------------------

### Bun Setup: Register Runtime Loader Plugin

Source: https://fumadocs.dev/docs/mdx/loader/bun

Registers the Fumadocs MDX runtime loader plugin in the Bun preload script. This enables direct access to content files like MDX and meta files during runtime. Ensure the `scripts/preload.ts` path is correctly configured in your `bunfig.toml`.

```toml
preload = ["./scripts/preload.ts"]
```

```typescript
import { postInstall } from 'fumadocs-mdx/next';

await postInstall({ configPath: 'source.config.ts' });
```

--------------------------------

### Create Planet - Python Request Example

Source: https://fumadocs.dev/docs/openapi/createPlanet

Example Python code using the `requests` library to create a new planet. It shows how to set the Authorization header and send a JSON payload.

```python
import requests
import json

def create_planet(token, planet_data):
    url = "https://galaxy.scalar.com/planets"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(url, headers=headers, data=json.dumps(planet_data))
    
    if response.status_code != 201:
        response.raise_for_status()  # Raise an exception for bad status codes
    
    return response.json()

# Example usage:
planet_payload = {
  "name": "Mars",
  "description": "The red planet",
  "type": "terrestrial",
  "habitabilityIndex": 0.68,
  "physicalProperties": {
    "mass": 0.107,
    "radius": True,
    "gravity": 0.378,
    "temperature": {
      "min": 130,
      "max": 308,
      "average": 210
    }
  },
  "atmosphere": [
    {
      "compound": "CO2",
      "percentage": 95.3
    }
  ],
  "discoveredAt": "1610-01-07T00:00:00Z",
  "image": "https://cdn.scalar.com/photos/mars.jpg",
  "satellites": [
    {
      "name": "Phobos",
      "diameter": 22.2
    }
  ],
  "creator": {
    "id": 1,
    "name": "Marc"
  },
  "tags": [
    "solar-system",
    "rocky",
    "explored"
  ],
  "successCallbackUrl": "https://example.com/webhook",
  "failureCallbackUrl": "https://example.com/webhook"
}

# Replace 'YOUR_JWT_TOKEN' with your actual token
# try:
#     created_planet = create_planet('YOUR_JWT_TOKEN', planet_payload)
#     print("Planet created:", created_planet)
# except requests.exceptions.RequestException as e:
#     print(f"Error creating planet: {e}")
```

--------------------------------

### Create Search Server from Source (Next.js)

Source: https://fumadocs.dev/docs/headless/search/orama

Sets up a search server by directly using the content source. This is the default and recommended method for its flexibility and Orama integration. It requires 'fumadocs-core/search/server' and a defined content 'source'.

```typescript
import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
```

--------------------------------

### Get All Planets (GET)

Source: https://fumadocs.dev/docs/openapi

Retrieves a list of all planets available in the system.

```APIDOC
## GET /api/planets

### Description
It’s easy to say you know them all, but do you really? Retrieve all the planets and check whether you missed one.

### Method
GET

### Endpoint
/api/planets

### Parameters
#### Query Parameters
(No query parameters specified)

#### Request Body
(No request body is expected for a GET operation.)

### Request Example
```
(No request body)
```

### Response
#### Success Response (200)
- **planets** (array) - An array of planet objects.

#### Response Example
```json
[
  {
    "id": "abc-123",
    "name": "Tatooine",
    "climate": "Arid"
  },
  {
    "id": "def-456",
    "name": "Naboo",
    "climate": "Temperate"
  }
]
```
```

--------------------------------

### Client Component Provider Setup for Search Dialog (TypeScript)

Source: https://fumadocs.dev/docs/ui/search/algolia

This example illustrates setting up a client component provider for Fumadocs UI, specifically to manage the search dialog. It ensures that the 'RootProvider' is a client component, allowing for client-side interactivity. The custom 'SearchDialog' component is passed to the 'search' prop of 'RootProvider'. This is useful when the main layout is a server component.

```typescript
'use client';
import { RootProvider } from 'fumadocs-ui/provider/<framework>';
import SearchDialog from '@/components/search';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
}

```

--------------------------------

### Deploy Next.js Fumadocs App with Docker and MDX Configuration

Source: https://fumadocs.dev/docs/ui/deploying

Multi-stage Dockerfile configuration for deploying Fumadocs with Next.js and MDX support. This setup includes dependency installation, build stage, and production runtime configuration. Ensures source.config.ts and next.config.js are included in the build context for proper MDX compilation.

```dockerfile
# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* source.config.ts next.config.* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

--------------------------------

### Define Doc Collection in Fumadocs MDX Config

Source: https://fumadocs.dev/docs/mdx

Configures a 'doc' type collection in Fumadocs MDX. This collection processes Markdown and MDX files from a specified directory, transforming them into accessible data structures.

```typescript
import { defineCollections } from 'fumadocs-mdx/config';

export const test = defineCollections({
  type: 'doc',
  dir: 'content/docs',
});
```

--------------------------------

### Install Algolia Search Dependency

Source: https://fumadocs.dev/docs/headless/search/algolia

Installs the necessary algoliasearch package using npm. This is the first step in setting up Algolia Search.

```shell
npm install algoliasearch
```

--------------------------------

### Install Python Package for Fumadocs

Source: https://fumadocs.dev/docs/ui/python

Installs the necessary Python package from your local node_modules to enable documentation generation from Python code.

```bash
pip install ./node_modules/fumadocs-python
```

--------------------------------

### Setup Lucide Icons Plugin in Fumadocs Loader

Source: https://fumadocs.dev/docs/headless/source-api/plugins

Integrates the Lucide Icons plugin into Fumadocs loader to use icons from Lucide React. Requires the lucide-react package to be installed. The plugin is passed in the plugins array of the loader configuration.

```javascript
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

export const source = loader({
  // ...
  plugins: [lucideIconsPlugin()],
});
```

--------------------------------

### Configure remarkMdxMermaid Remark Plugin

Source: https://fumadocs.dev/docs/ui/markdown/mermaid

Set up the Fumadocs MDX configuration to automatically convert Mermaid code blocks into MDX component calls using the remarkMdxMermaid plugin. This allows developers to write diagrams using markdown code fence syntax.

```typescript
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { defineConfig } from 'fumadocs-mdx/config';

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});
```
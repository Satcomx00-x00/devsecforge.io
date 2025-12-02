---
title: Documentation Structure
description: Guide to the documentation organization
---

# Documentation Structure

This documentation is organized into clear, numbered sections for easy navigation:

## 📁 Folder Structure

```
content/docs/
│
├── 📂 01-getting-started/          # Introduction & quick start
│   ├── index.mdx                   # Welcome page with learning paths
│   └── meta.json
│
├── 📂 02-security/                 # Security practices & tools
│   ├── 📂 scanning/                # Security scanning
│   │   ├── sast.mdx               # Static Application Security Testing
│   │   ├── dast.mdx               # Dynamic Application Security Testing
│   │   └── sca.mdx                # Software Composition Analysis
│   ├── 📂 secrets-management/      # Secrets & credentials
│   │   └── secrets.mdx            # Secrets management guide
│   ├── 📂 best-practices/          # Security guidelines
│   │   ├── overview.mdx           # Security best practices
│   │   └── container-security.mdx # Container security
│   ├── index.mdx                  # Security overview
│   └── meta.json
│
├── 📂 03-development/              # Development workflows
│   ├── 📂 code-quality/            # Code quality & linting
│   │   └── code-quality.mdx       # Linters, formatters, static analysis
│   ├── 📂 testing/                 # Testing strategies
│   │   └── testing.mdx            # Unit, integration, E2E testing
│   ├── 📂 git-workflows/           # Git & version control
│   │   ├── version-control.mdx    # Git best practices & workflows
│   │   └── code-review.mdx        # Code review guidelines
│   ├── index.mdx                  # Development overview
│   └── meta.json
│
├── 📂 04-infrastructure/           # Infrastructure management
│   ├── 📂 containerization/        # Docker & containers (to be added)
│   ├── 📂 orchestration/           # Kubernetes (to be added)
│   ├── 📂 iac/                     # Infrastructure as Code (to be added)
│   ├── index.mdx                  # Infrastructure overview
│   └── meta.json
│
├── 📂 05-cicd/                     # CI/CD pipelines
│   ├── 📂 pipelines/               # Pipeline design (to be added)
│   ├── 📂 platforms/               # GitHub Actions, GitLab CI (to be added)
│   ├── 📂 deployment/              # Deployment strategies (to be added)
│   └── meta.json
│
├── index.mdx                       # Root documentation page
└── meta.json                       # Root navigation configuration
```

## 🎯 Navigation Hierarchy

### 01 - Getting Started
Entry point for all users with learning paths for different roles.

### 02 - Security
Comprehensive security documentation:
- **Scanning**: SAST, DAST, SCA tools and practices
- **Secrets Management**: Managing credentials and sensitive data
- **Best Practices**: Security guidelines and container security

### 03 - Development
Development best practices:
- **Code Quality**: Linting, formatting, and static analysis
- **Testing**: Unit, integration, and E2E testing strategies
- **Git Workflows**: Version control and code review practices

### 04 - Infrastructure
Infrastructure and operations:
- **Containerization**: Docker and containerization (coming soon)
- **Orchestration**: Kubernetes deployment and management (coming soon)
- **IaC**: Terraform, Ansible, and infrastructure as code (coming soon)

### 05 - CI/CD
Continuous Integration and Deployment:
- **Pipelines**: Pipeline design and best practices (coming soon)
- **Platforms**: GitHub Actions, GitLab CI, Jenkins (coming soon)
- **Deployment**: Deployment strategies and GitOps (coming soon)

## 🔢 Numbering Convention

Folders are numbered to indicate the recommended learning order:
- `01-` = Start here (basics and introduction)
- `02-` = Security fundamentals
- `03-` = Development practices
- `04-` = Infrastructure knowledge
- `05-` = CI/CD implementation

## 📝 File Naming

- `index.mdx` - Category overview page
- `meta.json` - Navigation configuration for each folder
- Descriptive names for individual topic pages

## 🚀 Adding New Content

When adding new documentation:

1. Place files in the appropriate numbered category
2. Update the `meta.json` file in that folder
3. Follow the existing naming conventions
4. Link related topics using Cards or inline links

## 🔍 Finding Content

**By Role:**
- Developers → Start with `03-development`
- Security Engineers → Start with `02-security`
- DevOps Engineers → Start with `04-infrastructure` and `05-cicd`
- Team Leads → Start with `01-getting-started` overview

**By Topic:**
- Security scanning → `02-security/scanning/`
- Testing → `03-development/testing/`
- Git workflows → `03-development/git-workflows/`
- Container security → `02-security/best-practices/`

## 📚 Documentation Standards

All documentation pages should include:
- Clear title and description in frontmatter
- Icon for visual identification
- Code examples with syntax highlighting
- Mermaid diagrams for visual explanations
- Links to related topics
- Practical, actionable content

## 🤝 Contributing

To contribute to this documentation:
1. Follow the existing structure and naming conventions
2. Update meta.json files when adding new pages
3. Include practical examples and use cases
4. Link related topics appropriately
5. Test that all links work correctly

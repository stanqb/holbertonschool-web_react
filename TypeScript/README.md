# TypeScript Project

This project is a comprehensive introduction to TypeScript, covering interfaces, classes, functions, namespaces, and advanced typing concepts. The project is structured as a series of tasks that progressively build TypeScript knowledge and skills.

## Project Structure

The project consists of 11 tasks, each focusing on different TypeScript concepts:

- **Task 0**: Creating basic interfaces and rendering data with vanilla JavaScript
- **Task 1**: Building Teacher interfaces with optional properties and extending interfaces
- **Task 2**: Advanced types, class implementations, and string literal types
- **Task 3**: Ambient namespaces and type declarations for external libraries
- **Task 4**: Namespace organization and declaration merging
- **Task 5**: Brand convention and nominal typing

## Requirements

- **Allowed editors**: vi, vim, emacs, Visual Studio Code
- **Environment**: Ubuntu 18.04
- **Testing**: Jest (version 24.9.*)
- **File endings**: All files must end with a new line
- **Extensions**: Use `.ts` extension when possible
- **Compilation**: TypeScript compiler should show no warnings or errors

## Configuration Files

Each task uses specific configuration files:
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript compiler configuration
- `webpack.config.js` - Webpack bundler configuration
- `.eslintrc.js` - ESLint linting rules

## Installation and Setup

1. Navigate to the specific task directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
   ```
5. Start development server:
   ```bash
   npm run start-dev
   ```

## Learning Objectives

By completing this project, you will understand:

- How to create and use TypeScript interfaces
- Basic and advanced TypeScript types
- Class implementation with TypeScript
- Function typing and type predicates
- String literal types and union types
- Namespace organization and module system
- Declaration merging concepts
- Ambient declarations for external libraries
- Brand convention and nominal typing
- Working with external JavaScript libraries in TypeScript

## Tasks Overview

### Basic Concepts (Tasks 0-1)
- Student interface creation and DOM manipulation
- Teacher interface with readonly properties
- Interface extension and optional properties

### Intermediate Concepts (Tasks 2-3)
- Class implementations and type predicates
- Function overloading and string literal types
- Ambient namespaces and external library integration

### Advanced Concepts (Tasks 4-5)
- Namespace organization and declaration merging
- Subject-specific class implementations
- Brand convention for type safety

## Compilation

When running `npm run build`, the project should compile without any TypeScript errors. All type checking is performed at compile time to ensure type safety.

## Repository Information

- **GitHub repository**: holbertonschool-web_react
- **Directory**: TypeScript
- **Files**: Various `.ts`, `.js`, and configuration files across multiple task directories

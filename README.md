### TOPICS

- 📜 **JavaScript Development**
- 📦 **Monorepo Management**
- 🛠️ **Package Management**

---

### TURBOREPO

**Overview**: Turborepo is a monorepo tool for JavaScript and TypeScript that facilitates the management of multiple packages within a single repository.

**Built in**: Node.js, TypeScript, Rust

#### KEY FEATURES

1. 🗄️ **Build Cache**
    
    - **Description**: Stores the results of previous builds.
    - **How It Saves Time**: When a build is rerun, it checks if the inputs (source code, dependencies, etc.) have changed. If not, it reuses the cached result, avoiding unnecessary recompilations. This allows only the parts of the code that actually changed to be reprocessed.
    - **Topics**: 📜 **Build Optimization**, 🗄️ **Caching**, ⚡ **Efficiency**
2. 🏗️ **Task Pipeline**
    
    - **Description**: Executes tasks in parallel and in the correct order based on dependencies.
    - **How It Saves Time**: Optimizes execution time by making the most of system resources. For example, if several packages depend on each other, Turborepo knows which can be built simultaneously and which need to be built sequentially.
    - **Topics**: 🛠️ **Task Management**, 🚀 **Parallel Execution**, ⚡ **Efficiency**
3. ⚙️ **Incremental Builds**
    
    - **Description**: Recompiles only what has changed.
    - **How It Saves Time**: Monitors code changes and recompiles only the modified components, avoiding the recompilation of the entire project. For instance, if only one module is altered, only that module will be reprocessed, while the rest of the code remains intact.
    - **Topics**: 📜 **Build Optimization**, 🔁 **Incremental Builds**, ⚡ **Efficiency**

#### AUTHORS AND MAINTAINERS

- **Creator**: The team at [Vercel](https://vercel.com/)
- **Maintenance**: Actively maintained by Vercel, ensuring frequent updates and continuous support.

#### FOLDER STRUCTURE

```bash
my-monorepo/
├── apps/
│   └── <your-apps>/
├── packages/
│   └── <your-packages>/
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

### PNPM

**Overview**: pnpm is a package manager for JavaScript that stands out for its speed and space efficiency.

**Built in**: Node.js, TypeScript, Rust

#### KEY FEATURES

1. ⚡ **Fast Installations**
    
    - **Description**: Uses a global cache and symbolic links to speed up installations.
    - **How It Saves Time**: Instead of downloading and storing a complete copy of each package for each project, pnpm stores a single global copy and creates symbolic links. This reduces download and installation time since packages are already available locally.
    - **Topics**: 🛠️ **Package Management**, ⚡ **Fast Installations**, ⚡ **Efficiency**
2. 🗂️ **Space Efficiency**
    
    - **Description**: Avoids duplication of packages on disk by using a storage structure that shares common packages between projects.
    - **How It Saves Space**: Multiple projects can share the same dependencies without needing to store multiple copies, significantly saving disk space.
    - **Topics**: 🛠️ **Package Management**, 🗂️ **Space Efficiency**, ⚡ **Efficiency**
3. 🔒 **Security**
    
    - **Description**: Ensures the integrity and consistency of dependencies through rigorous checks.
    - **How It Ensures Safety**: By using a storage format that isolates each project's dependencies, pnpm avoids conflicts and ensures that each project has exactly the versions of dependencies it needs.
    - **Topics**: 🛠️ **Package Management**, 🔒 **Security**, 🛡️ **Integrity**

#### AUTHORS AND MAINTAINERS

- **Creator**: Zoltan Kochan
- **Maintenance**: Maintained by an active community of developers, with contributions from companies and independent developers. Available on [GitHub](https://github.com/pnpm/pnpm).

#### FOLDER STRUCTURE

```bash
my-monorepo/
├── apps/
│   └── <your-apps>/
├── packages/
│   └── <your-packages>/
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

---

### CHANGESETS

**Overview**: Changesets is a tool to manage versioning and changelogs with a focus on monorepos. It helps you publish your libraries consistently and reliably.

**Built in**: Node.js, TypeScript

#### KEY FEATURES

1. 📦 **Versioning**
    
    - **Description**: Automatically bump versions of your packages based on changes.
    - **How It Helps**: Ensures consistent versioning across all packages in the monorepo.
    - **Topics**: 📜 **Version Control**, 📦 **Package Management**, 🛠️ **Consistency**
2. 📝 **Changelogs**
    
    - **Description**: Generates changelogs based on the changes in your repositories.
    - **How It Helps**: Provides clear documentation of changes for each release.
    - **Topics**: 📜 **Documentation**, 📝 **Changelogs**, 🛠️ **Version Control**
3. 🚀 **Publishing**
    
    - **Description**: Facilitates the publishing process of your libraries to package registries like npm.
    - **How It Helps**: Streamlines the process of releasing new versions of your packages.
    - **Topics**: 🚀 **Deployment**, 📦 **Package Management**, 🛠️ **Automation**

#### AUTHORS AND MAINTAINERS

- **Creator**: [Changesets](https://github.com/atlassian/changesets) community and contributors
- **Maintenance**: Actively maintained by the open-source community, ensuring regular updates and support.

#### FOLDER STRUCTURE

```bash
my-monorepo/
├── .changeset/
│   └── <changes files>/
├── apps/
│   └── <your-apps>/
├── packages/
│   └── <your-packages>/
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

#### COMMON COMMANDS

|Command|Description|
|---|---|
|`pnpx changeset init`|Initialize Changesets in the repository|
|`pnpx changeset add`|Create a new changeset|
|`pnpx changeset version`|Update versions and changelogs based on changesets|
|`pnpx changeset publish`|Publish the packages to the package registry|
|`pnpx changeset status`|View the status of changesets|

---

### HOW THEY RELATE

**Combination of Technologies**: When you use Turborepo with pnpm and Changesets, you combine efficient multi-package management with fast and economical package installations and reliable versioning and publishing. Turborepo orchestrates and organizes packages within the monorepo, pnpm manages the installation and linking of dependencies, while Changesets handles versioning and publishing.

---

### GETTING STARTED

**Step-by-Step Setup**:

1. **Install pnpm globally**:
    
    ```sh
    npm install -g pnpm
    ```
    
2. **Create a new directory for your repository and navigate to it**:
    
    ```sh
    mkdir my-monorepo
    cd my-monorepo
    ```
    
3. **Initialize a new Turborepo project**:
    
    ```sh
    npx create-turbo@latest
    ```
    
    - Follow the interactive prompts to set up Turborepo. This will create the basic structure of your monorepo.
4. **Configure pnpm as the package manager**:
    
    - Create a `pnpm-workspace.yaml` file at the root of your repository. This file defines which folders contain packages that pnpm should manage.
    
    ```yaml
    packages:
      - 'packages/*'
      - 'apps/*'
    ```
    
5. **Install dependencies with pnpm**:
    
    ```sh
    pnpm install
    ```
    
6. **Install Changesets**:
    
    ```sh
    pnpm add @changesets/cli -D
    ```
    
7. **Initialize Changesets**:
    
    ```sh
    pnpx changeset init
    ```
    

**Conclusion**: You should now have a Turborepo repository set up using pnpm and Changesets. From here, you can add packages and applications within the `packages` and `apps` folders, manage their dependencies efficiently, and handle versioning and publishing with ease.
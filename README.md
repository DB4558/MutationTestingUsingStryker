# Mutation Testing on Data Structure Algorithms using Stryker

## Contributors

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Thanks to the following people for their contributions:

- [Ketki Kerkar](https://github.com/ketki-kerkar)

This project demonstrates **Mutation Testing** on various **Data Structure Algorithms** using [Stryker](https://stryker-mutator.io/), a popular mutation testing framework. The algorithms are tested with **JUnit** test cases to ensure code reliability and mutation coverage.

---

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Running Tests](#running-tests)
6. [Mutation Testing](#mutation-testing)
7. [Contributors](#contributors)

---

## 🧠 Introduction

Mutation testing helps evaluate the quality of test cases by introducing small changes (mutations) in the source code and verifying if the tests can catch these mutations. This project applies mutation testing to common data structure algorithms such as:
- Sorting (Quick Sort, Merge Sort)
- Searching (Binary Search)
- Linked List Operations
- Tree Traversals

The testing framework **Stryker** is used to perform mutation analysis on these algorithms.

---


---

## 🛠️ Technologies Used

- **Java**: Programming language
- **JUnit 5**: Unit testing framework
- **Stryker**: Mutation testing framework
- **Maven**: Build automation tool

---

## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/MutationTestingUsingStryker.git
   cd MutationTestingUsingStryker
2. **Install Stryker**

3. **Install the Stryker mutation testing framework via npm or yarn:**

   ```bash
   npm install --save-dev @stryker-mutator/core

3. **Create Stryker Configuration File**

   ```bash
   npx stryker init

Choose the appropriate configuration for your project, including:

    Language: java
    Test runner: junit
    Framework: maven

Example stryker.conf.json:

{
  "mutator": "java",
  "packageManager": "maven",
  "testRunner": "junit",
  "reporters": ["clear-text", "html"],
  "maxConcurrentTestRunners": 4,
  "timeoutMS": 5000
}

🧪 Running Tests

     **Run the JUnit tests to ensure all algorithms work as expected:**
     ```bash
     mvn test

🧬 Mutation Testing

  **Run the Stryker mutation analysis:**
  ```bash
  npx stryker run



// Complete Syllabus Navigator with ALL Units/Topics
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const subjectDropdown = document.getElementById('subject-dropdown');
    const contentContainer = document.getElementById('content-container');
    const currentLevel = document.getElementById('current-level');
    const backBtn = document.getElementById('back-btn');
    const syllabusView = document.getElementById('syllabus-view');

    // Complete Syllabus Data
    const syllabusData = {
        "os": {
            name: "Operating Systems",
            code: "BCS401",
            syllabus: {
                name: "Operating Systems Syllabus",
                type: "root",
                children: [
                    // Unit I
                    {
                        name: "Unit I: Introduction",
                        type: "unit",
                        children: [
                            { name: "Operating system and functions", type: "topic" },
                            { 
                                name: "Classification of Operating systems", 
                                type: "topic",
                                children: [
                                    { name: "Batch Systems", type: "subtopic" },
                                    { name: "Interactive Systems", type: "subtopic" },
                                    { name: "Time sharing Systems", type: "subtopic" },
                                    { name: "Real Time Systems", type: "subtopic" },
                                    { name: "Multiprocessor Systems", type: "subtopic" },
                                    { name: "Multiuser Systems", type: "subtopic" },
                                    { name: "Multiprocess Systems", type: "subtopic" },
                                    { name: "Multithreaded Systems", type: "subtopic" }
                                ]
                            },
                            { 
                                name: "Operating System Structure", 
                                type: "topic",
                                children: [
                                    { name: "Layered structure", type: "subtopic" },
                                    { name: "System Components", type: "subtopic" },
                                    { name: "Operating System services", type: "subtopic" },
                                    { name: "Reentrant Kernels", type: "subtopic" },
                                    { name: "Monolithic Systems", type: "subtopic" },
                                    { name: "Microkernel Systems", type: "subtopic" }
                                ]
                            }
                        ]
                    },
                    // Unit II
                    {
                        name: "Unit II: Concurrent Processes",
                        type: "unit",
                        children: [
                            { name: "Process Concept", type: "topic" },
                            { name: "Principle of Concurrency", type: "topic" },
                            { name: "Producer/Consumer Problem", type: "topic" },
                            { name: "Mutual Exclusion", type: "topic" },
                            { name: "Critical Section Problem", type: "topic" },
                            { name: "Semaphores", type: "topic" },
                            { 
                                name: "Classical Problems in Concurrency", 
                                type: "topic",
                                children: [
                                    { name: "Dining Philosopher Problem", type: "subtopic" },
                                    { name: "Sleeping Barber Problem", type: "subtopic" }
                                ]
                            },
                            { name: "Inter Process Communication", type: "topic" },
                            { name: "Process generation", type: "topic" }
                        ]
                    },
                    // Unit III
                    {
                        name: "Unit III: CPU Scheduling",
                        type: "unit",
                        children: [
                            { name: "Scheduling Concepts", type: "topic" },
                            { name: "Performance Criteria", type: "topic" },
                            { name: "Process States", type: "topic" },
                            { name: "Schedulers", type: "topic" },
                            { name: "Process Control Block", type: "topic" },
                            { name: "Threads and their management", type: "topic" },
                            { name: "Scheduling Algorithms", type: "topic" },
                            { name: "Multiprocessor Scheduling", type: "topic" },
                            { 
                                name: "Deadlock", 
                                type: "topic",
                                children: [
                                    { name: "Deadlock characterization", type: "subtopic" },
                                    { name: "Prevention", type: "subtopic" },
                                    { name: "Avoidance", type: "subtopic" },
                                    { name: "Detection", type: "subtopic" },
                                    { name: "Recovery from deadlock", type: "subtopic" }
                                ]
                            }
                        ]
                    },
                    // Unit IV
                    {
                        name: "Unit IV: Memory Management",
                        type: "unit",
                        children: [
                            { name: "Basic bare machine", type: "topic" },
                            { name: "Resident monitor", type: "topic" },
                            { name: "Multiprogramming with fixed partitions", type: "topic" },
                            { name: "Multiprogramming with variable partitions", type: "topic" },
                            { name: "Protection schemes", type: "topic" },
                            { name: "Paging", type: "topic" },
                            { name: "Segmentation", type: "topic" },
                            { name: "Virtual memory concepts", type: "topic" },
                            { name: "Demand paging", type: "topic" },
                            { name: "Page replacement algorithms", type: "topic" },
                            { name: "Thrashing", type: "topic" },
                            { name: "Cache memory organization", type: "topic" },
                            { name: "Locality of reference", type: "topic" }
                        ]
                    },
                    // Unit V
                    {
                        name: "Unit V: I/O Management",
                        type: "unit",
                        children: [
                            { name: "I/O devices and subsystems", type: "topic" },
                            { name: "I/O buffering", type: "topic" },
                            { name: "Disk storage and disk scheduling", type: "topic" },
                            { name: "RAID", type: "topic" },
                            { name: "File concept", type: "topic" },
                            { name: "File organization and access mechanism", type: "topic" },
                            { name: "File directories and sharing", type: "topic" },
                            { name: "File system implementation", type: "topic" },
                            { name: "File system protection and security", type: "topic" }
                        ]
                    }
                ]
            }
        },
   "automata": {
    name: "Theory of Automata and Formal Languages",
    code: "BCS402",
    syllabus: {
        name: "Theory of Automata and Formal Languages Syllabus",
        type: "root",
        children: [
            // Unit I
            {
                name: "Unit I: Basic Concepts and Automata Theory",
                type: "unit",
                children: [
                    { name: "Introduction to Theory of Computation", type: "topic" },
                    { name: "Automata, Computability and Complexity", type: "topic" },
                    { name: "Alphabet, Symbol, String, Formal Languages", type: "topic" },
                    { name: "Deterministic Finite Automaton (DFA)", type: "topic" },
                    { name: "Non Deterministic Finite Automaton (NFA)", type: "topic" },
                    { name: "Equivalence of DFA and NFA", type: "topic" },
                    { name: "Finite Automata with output", type: "topic" },
                    { name: "Minimization of Finite Automata", type: "topic" }
                ]
            },
            // Unit II
            {
                name: "Unit II: Regular Expressions and Languages",
                type: "unit",
                children: [
                    { name: "Regular Expressions", type: "topic" },
                    { name: "Transition Graph", type: "topic" },
                    { name: "Kleen’s Theorem", type: "topic" },
                    { name: "Finite Automata and Regular Expression", type: "topic" },
                    { name: "Closure properties of Regular Languages", type: "topic" },
                    { name: "Pumping Lemma", type: "topic" },
                    { name: "Decidability", type: "topic" }
                ]
            },
            // Unit III
            {
                name: "Unit III: Regular and Non-Regular Grammars",
                type: "unit",
                children: [
                    { name: "Context Free Grammar (CFG)", type: "topic" },
                    { name: "Derivations, Languages, Derivation Trees", type: "topic" },
                    { name: "Regular Grammars", type: "topic" },
                    { name: "Conversion of FA into CFG", type: "topic" },
                    { name: "Normal Forms", type: "topic" }
                ]
            },
            // Unit IV
            {
                name: "Unit IV: Push Down Automata and Properties of Context Free Languages",
                type: "unit",
                children: [
                    { name: "Nondeterministic Pushdown Automata (NPDA)", type: "topic" },
                    { name: "Deterministic Pushdown Automata (DPDA)", type: "topic" },
                    { name: "Pumping Lemma for CFL", type: "topic" },
                    { name: "Closure properties of CFL", type: "topic" }
                ]
            },
            // Unit V
            {
                name: "Unit V: Turing Machines and Recursive Function Theory",
                type: "unit",
                children: [
                    { name: "Basic Turing Machine Model", type: "topic" },
                    { name: "Language Acceptability of Turing Machines", type: "topic" },
                    { name: "Universal Turing machine", type: "topic" },
                    { name: "Halting Problem", type: "topic" },
                    { name: "Introduction to Recursive Function Theory", type: "topic" }
                ]
            }
        ]
    }
},

"oop_java": {
    name: "Object Oriented Programming with Java",
    code: "BCS403",
    syllabus: {
        name: "Object Oriented Programming with Java Syllabus",
        type: "root",
        children: [
            {
                name: "Course Outcomes",
                type: "unit",
                children: [
                    { name: "CO 1: Develop the object-oriented programming concepts using Java (K3, K4)", type: "topic" },
                    { name: "CO 2: Implement exception handling, file handling, and multi-threading in Java (K2, K4)", type: "topic" },
                    { name: "CO 3: Apply new Java features to build Java programs (K3)", type: "topic" },
                    { name: "CO 4: Analyze Java programs with Collection Framework (K4)", type: "topic" },
                    { name: "CO 5: Test web and RESTful Web Services with Spring Boot using Spring Framework concepts (K5)", type: "topic" }
                ]
            },
            // Unit I
            {
                name: "Unit I: Introduction to Java and Object-Oriented Programming",
                type: "unit",
                children: [
                    { name: "Introduction: Why Java, History of Java, JVM, JRE, Java Environment", type: "topic" },
                    { name: "Java Source File Structure and Compilation", type: "topic" },
                    { name: "Fundamental Programming Structures in Java", type: "topic" },
                    { name: "Object Oriented Programming Concepts", type: "topic" },
                    { name: "Packages and Naming Conventions", type: "topic" }
                ]
            },
            // Unit II
            {
                name: "Unit II: Exception Handling and Multithreading",
                type: "unit",
                children: [
                    { name: "Exception Handling: Types and Control Flow", type: "topic" },
                    { name: "Input/Output Basics: Byte Streams and Character Streams", type: "topic" },
                    { name: "Multithreading: Thread Life Cycle and Synchronization", type: "topic" }
                ]
            },
            // Unit III
            {
                name: "Unit III: Java New Features",
                type: "unit",
                children: [
                    { name: "Functional Interfaces and Lambda Expressions", type: "topic" },
                    { name: "Stream API and Default Methods", type: "topic" },
                    { name: "Java Module System and New Syntax Features", type: "topic" }
                ]
            },
            // Unit IV
            {
                name: "Unit IV: Java Collections Framework",
                type: "unit",
                children: [
                    { name: "Collection Framework Hierarchy", type: "topic" },
                    { name: "List, Set, and Map Interfaces", type: "topic" },
                    { name: "Sorting and Comparable Interface", type: "topic" }
                ]
            },
            // Unit V
            {
                name: "Unit V: Spring Framework and Spring Boot",
                type: "unit",
                children: [
                    { name: "Spring Core Basics and Dependency Injection", type: "topic" },
                    { name: "Building RESTful Web Services with Spring Boot", type: "topic" }
                ]
            }
        ]
    }
}
    };

    // Navigation state
    let currentData = null;
    let history = [];

    // Initialize app
    function init() {
        setupDropdown();
        backBtn.addEventListener('click', goBack);
        syllabusView.style.display = 'none';
    }

    // Setup subject dropdown
    function setupDropdown() {
        subjectDropdown.addEventListener('change', function() {
            if (this.value) {
                loadSubject(this.value);
            }
        });
    }

    // Load a subject
    function loadSubject(subjectId) {
        currentData = syllabusData[subjectId].syllabus;
        syllabusView.style.display = 'block';
        renderLevel(currentData);
    }

    // Render current level
    function renderLevel(data) {
        currentData = data;
        currentLevel.textContent = data.name;
        contentContainer.innerHTML = '';
        
        backBtn.classList.toggle('hidden', data.type === 'root');

        if (data.children) {
            data.children.forEach(item => {
                const box = createBox(item);
                contentContainer.appendChild(box);
            });
        }
    }

    // Create navigation box
    function createBox(item) {
        const box = document.createElement('div');
        box.className = item.children ? 'box clickable' : 'box';
        
        box.innerHTML = `
            <h2>${item.name}</h2>
            ${item.code ? `<p>${item.code}</p>` : ''}
        `;

        if (item.children) {
            box.addEventListener('click', () => {
                history.push(currentData);
                renderLevel(item);
            });
        }

        return box;
    }

    // Go back in navigation
    function goBack() {
        if (history.length > 0) {
            renderLevel(history.pop());
        }
    }

    // Start the app
    init();
});
import { Topic } from "@/components/TopicCard";

export const dsaTopics: Topic[] = [
  // Phase 1: Foundation
  {
    id: "arrays",
    title: "Arrays and Strings",
    difficulty: "Easy",
    description: "Master the fundamentals of arrays and string manipulation - the building blocks of most algorithms.",
    importance: "Arrays and strings are the most commonly tested topics in interviews. They form the foundation for understanding more complex data structures and are used in almost every coding problem.",
    keyAreas: [
      "Two-pointer technique",
      "Sliding window",
      "String manipulation",
      "Array traversal patterns",
      "In-place operations",
      "Prefix sums"
    ],
    problems: [
      { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { title: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
      { title: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
      { title: "Container With Most Water", url: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
      { title: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" }
    ],
    completed: false
  },
  {
    id: "linkedlists",
    title: "Linked Lists",
    difficulty: "Easy",
    description: "Learn to manipulate linked data structures and master pointer manipulation techniques.",
    importance: "Linked lists teach fundamental pointer manipulation skills essential for understanding trees, graphs, and system design. They're frequently tested in interviews.",
    keyAreas: [
      "Node traversal",
      "Pointer manipulation",
      "Cycle detection",
      "Reversal techniques",
      "Merging lists",
      "Fast and slow pointers"
    ],
    problems: [
      { title: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { title: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { title: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { title: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { title: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" }
    ],
    completed: false
  },
  {
    id: "stacks-queues",
    title: "Stacks and Queues",
    difficulty: "Easy",
    description: "Understand LIFO and FIFO data structures and their applications in solving complex problems.",
    importance: "Stacks and queues are essential for parsing, expression evaluation, and BFS/DFS algorithms. They're building blocks for many advanced algorithms.",
    keyAreas: [
      "LIFO and FIFO principles",
      "Expression evaluation",
      "Parentheses matching",
      "Monotonic stacks",
      "Queue implementations",
      "Deque operations"
    ],
    problems: [
      { title: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
      { title: "Implement Queue using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
      { title: "Min Stack", url: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
      { title: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
      { title: "Largest Rectangle in Histogram", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" }
    ],
    completed: false
  },

  // Phase 2: Core Algorithms
  {
    id: "sorting-searching",
    title: "Sorting and Searching",
    difficulty: "Medium",
    description: "Master fundamental algorithms that form the basis of efficient problem-solving.",
    importance: "Sorting and searching algorithms are fundamental to computer science and appear in countless interview questions. Understanding them deeply is crucial for optimization.",
    keyAreas: [
      "Binary search variations",
      "Quick sort and merge sort",
      "Heap sort",
      "Search in rotated arrays",
      "Finding peaks and valleys",
      "Custom sorting criteria"
    ],
    problems: [
      { title: "Binary Search", url: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
      { title: "Find First and Last Position of Element in Sorted Array", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", difficulty: "Medium" },
      { title: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { title: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
      { title: "Kth Largest Element in an Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" }
    ],
    completed: false
  },
  {
    id: "recursion-backtracking",
    title: "Recursion and Backtracking",
    difficulty: "Medium",
    description: "Develop recursive thinking and learn to solve complex problems by breaking them down.",
    importance: "Recursion is essential for tree/graph traversals, dynamic programming, and many optimization problems. Backtracking is crucial for constraint satisfaction problems.",
    keyAreas: [
      "Base case identification",
      "Recursive relation design",
      "Backtracking patterns",
      "State space exploration",
      "Pruning techniques",
      "Memoization basics"
    ],
    problems: [
      { title: "Fibonacci Number", url: "https://leetcode.com/problems/fibonacci-number/", difficulty: "Easy" },
      { title: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/", difficulty: "Medium" },
      { title: "Permutations", url: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
      { title: "Subsets", url: "https://leetcode.com/problems/subsets/", difficulty: "Medium" },
      { title: "N-Queens", url: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" }
    ],
    completed: false
  },

  // Phase 3: Advanced Data Structures
  {
    id: "trees",
    title: "Trees and Binary Search Trees",
    difficulty: "Medium",
    description: "Master hierarchical data structures and tree traversal algorithms.",
    importance: "Trees are fundamental to many applications: databases (B-trees), file systems, and decision making. BSTs are crucial for efficient searching and sorting.",
    keyAreas: [
      "Tree traversals (DFS, BFS)",
      "BST operations",
      "Tree construction",
      "Path algorithms",
      "Tree validation",
      "Lowest common ancestor"
    ],
    problems: [
      { title: "Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
      { title: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { title: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { title: "Lowest Common Ancestor of BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" },
      { title: "Serialize and Deserialize Binary Tree", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" }
    ],
    completed: false
  },
  {
    id: "heaps",
    title: "Heaps and Priority Queues",
    difficulty: "Medium",
    description: "Learn to efficiently maintain ordered data and solve optimization problems.",
    importance: "Heaps are essential for algorithms requiring quick access to min/max elements, scheduling, and graph algorithms like Dijkstra's.",
    keyAreas: [
      "Heap operations",
      "Priority queue implementation",
      "Heap sort algorithm",
      "K-way problems",
      "Median maintenance",
      "Top K elements"
    ],
    problems: [
      { title: "Kth Largest Element in Array", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { title: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { title: "Merge k Sorted Lists", url: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
      { title: "Find Median from Data Stream", url: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
      { title: "Task Scheduler", url: "https://leetcode.com/problems/task-scheduler/", difficulty: "Medium" }
    ],
    completed: false
  },
  {
    id: "hash-tables",
    title: "Hash Tables and Maps",
    difficulty: "Easy",
    description: "Master efficient lookups and counting techniques using hash-based data structures.",
    importance: "Hash tables provide O(1) average lookup time and are used in countless algorithms for optimization, caching, and data organization.",
    keyAreas: [
      "Hash function design",
      "Collision resolution",
      "Frequency counting",
      "Grouping and mapping",
      "Set operations",
      "LRU cache implementation"
    ],
    problems: [
      { title: "Two Sum", url: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { title: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
      { title: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
      { title: "First Missing Positive", url: "https://leetcode.com/problems/first-missing-positive/", difficulty: "Hard" },
      { title: "Design HashMap", url: "https://leetcode.com/problems/design-hashmap/", difficulty: "Easy" }
    ],
    completed: false
  },

  // Phase 4: Graph Algorithms
  {
    id: "graphs-bfs-dfs",
    title: "Graphs: BFS and DFS",
    difficulty: "Medium",
    description: "Learn to traverse and analyze connected data using fundamental graph algorithms.",
    importance: "Graphs model real-world relationships and networks. BFS/DFS are foundational for pathfinding, connectivity, and many optimization problems.",
    keyAreas: [
      "Graph representations",
      "BFS for shortest paths",
      "DFS for connectivity",
      "Cycle detection",
      "Topological sorting",
      "Connected components"
    ],
    problems: [
      { title: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
      { title: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
      { title: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
      { title: "Pacific Atlantic Water Flow", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/", difficulty: "Medium" },
      { title: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/", difficulty: "Hard" }
    ],
    completed: false
  },

  // Phase 5: Advanced Techniques
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    difficulty: "Hard",
    description: "Master the art of solving complex problems by breaking them into simpler subproblems.",
    importance: "DP is crucial for optimization problems and appears frequently in interviews. It teaches systematic problem-solving and optimal substructure recognition.",
    keyAreas: [
      "Optimal substructure",
      "Overlapping subproblems",
      "Memoization vs tabulation",
      "State definition",
      "Transition relations",
      "Space optimization"
    ],
    problems: [
      { title: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/", difficulty: "Easy" },
      { title: "House Robber", url: "https://leetcode.com/problems/house-robber/", difficulty: "Medium" },
      { title: "Coin Change", url: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
      { title: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
      { title: "Edit Distance", url: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard" }
    ],
    completed: false
  },
  {
    id: "greedy-algorithms",
    title: "Greedy Algorithms",
    difficulty: "Medium",
    description: "Learn to make locally optimal choices that lead to globally optimal solutions.",
    importance: "Greedy algorithms are elegant and efficient for many optimization problems. They teach strategic thinking and problem pattern recognition.",
    keyAreas: [
      "Greedy choice property",
      "Optimal substructure",
      "Activity selection",
      "Interval scheduling",
      "Huffman coding",
      "Minimum spanning trees"
    ],
    problems: [
      { title: "Best Time to Buy and Sell Stock II", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", difficulty: "Medium" },
      { title: "Jump Game", url: "https://leetcode.com/problems/jump-game/", difficulty: "Medium" },
      { title: "Gas Station", url: "https://leetcode.com/problems/gas-station/", difficulty: "Medium" },
      { title: "Non-overlapping Intervals", url: "https://leetcode.com/problems/non-overlapping-intervals/", difficulty: "Medium" },
      { title: "Minimum Number of Arrows", url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", difficulty: "Medium" }
    ],
    completed: false
  }
];

export const phaseCategories = [
  {
    name: "Foundation",
    description: "Essential building blocks",
    topics: ["arrays", "linkedlists", "stacks-queues"]
  },
  {
    name: "Core Algorithms", 
    description: "Fundamental algorithmic techniques",
    topics: ["sorting-searching", "recursion-backtracking"]
  },
  {
    name: "Advanced Data Structures",
    description: "Complex data organization",
    topics: ["trees", "heaps", "hash-tables"]
  },
  {
    name: "Graph Theory",
    description: "Network and relationship modeling",
    topics: ["graphs-bfs-dfs"]
  },
  {
    name: "Advanced Techniques",
    description: "Optimization and strategic thinking",
    topics: ["dynamic-programming", "greedy-algorithms"]
  }
];
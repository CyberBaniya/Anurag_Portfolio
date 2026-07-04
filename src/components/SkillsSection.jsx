import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 88, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },

  // Backend
  { name: "Java", level: 90, category: "Backend" },
  { name: "Spring Boot", level: 88, category: "Backend" },
  { name: "Spring MVC", level: 85, category: "Backend" },
  { name: "Spring Data JPA", level: 85, category: "Backend" },
  { name: "Spring JDBC", level: 80, category: "Backend" },
  { name: "REST APIs", level: 88, category: "Backend" },

  // AI / Technologies
  { name: "Python", level: 88, category: "Technology" },
  { name: "Machine Learning", level: 80, category: "Technology" },
  { name: "Deep Learning", level: 75, category: "Technology" },
  { name: "LangChain", level: 85, category: "Technology" },
  { name: "LangGraph", level: 82, category: "Technology" },
  { name: "OpenAI API", level: 88, category: "Technology" },

  // Database
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Oracle", level: 75, category: "Database" },
  { name: "MongoDB", level: 78, category: "Database" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 90, category: "Tools" },
  { name: "Spring Tool Suite (STS)", level: 88, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Technology",
  "Database",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "All" || skill.category === activeCategory
  );

  return (
   <section
  id="skills"
  className="py-16"
>
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-10 text-foreground">
          Skills
        </h2>

        {/* Categories */}
       <div className="flex flex-wrap justify-center gap-3 mb-10">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={cn(
        "px-4 py-2 rounded-lg border rounded-full font-medium transition-all duration-300",
        activeCategory === category
          ? "bg-white text-black border-black shadow-md"
          : "bg-black text-white border-black hover:bg-gray-800"
      )}
    >
      {category}
    </button>
  ))}
</div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="border border-gray-200 rounded-lg p-5 bg-white"
            >
              {/* Skill Name */}
              <h3 className="text-base font-medium text-gray-800 mb-3">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-gray-800 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-2 text-xs text-gray-500">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
"use client";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills/index";
import Icon from '@mdi/react';
import { 
  mdiMonitorDashboard, 
  mdiCellphone, 
  mdiCloud, 
  mdiTestTube 
} from '@mdi/js';

export default function Skills() {
  // Get unique categories from skills array
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  // Icon mapping for categories
  const categoryIcons = {
    "Frontend & Languages": mdiMonitorDashboard,
    "Mobile & Backend": mdiCellphone,
    "DevOps & Cloud": mdiCloud,
    "Testing & QA": mdiTestTube
  };

  return (
    <section id="skills" className="spacing-section bg-secondary">
      <div className="container mx-auto spacing-container max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 max-w-4xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 text-sm"
              >
                <Icon 
                  path={categoryIcons[category as keyof typeof categoryIcons]} 
                  size={0.7} 
                />
                <span>{category}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-items-center max-w-5xl mx-auto">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, idx) => (
                    <SkillCard 
                      key={idx} 
                      icon={skill.icon} 
                      color={skill.color} 
                      label={skill.label} 
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

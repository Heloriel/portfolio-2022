import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Loading,
  SectionTitle,
  SkillBlock,
} from "@/components";
import { Context } from "@/contexts/LanguageContext";
import { translation } from '@/lang/language';

interface Skills {
  id: string;
  name: string;
  icon: string;
  description: string;
  skillLevel: number;
}

function SkillsFailOrEmpty() {
  return (
    <section
      id="skills"
      className="skills-section overflow-hidden rounded-t-[32px] sm:rounded-none"
    >
      <div className="flex flex-1 flex-col items-center px-4 lg:px-10">
        <SectionTitle title="Conhecimentos" className="my-16 text-xl" />
        <div className="flex justify-center w-full">
          <span className="text-white text-3xl">Não foi possivel carregar o conteúdo 😞</span>
        </div>
      </div>
    </section>
  );
}

export const Skills = () => {
  const context = useContext(Context);

  const GET_SKILLS_QUERY = gql`
    query GetSkills {
      skills(orderBy: order_ASC, first: 30) {
        id
        name
        icon
        description
        skillLevel
        order
      }
    }
  `;

  const { loading, data } = useQuery<{ skills: Skills[] }>(GET_SKILLS_QUERY);

  if (loading) {
    return <Loading size={32} dots/>;
  }

  if (!data || !data.skills) {
    return <SkillsFailOrEmpty />;
  }

  return (
    <section id="skills" className="flex items-start justify-center pb-8 overflow-hidden rounded-t-[32px] sm:rounded-none px-8">
      <div className="flex flex-col w-full items-center lg:px-10 max-w-[1270px]">
        <SectionTitle title={translation[context.lang].sectionsTitle.skills} className="my-16 text-xl" />        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full place-items-center place-content-start">
            {data.skills.map((skill) => <SkillBlock tech={{name: skill.name, level: skill.skillLevel}} />)}
          </div>
      </div>
    </section>
  );
}

import React from 'react';
import Icon from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>
                {props.title}
            </SkillTitle>
            <SkillText>
                {props.description}
            </SkillText>
        </StyledSkill>
    );
};

export default Skill;

const StyledSkill = styled.div`
  width: 30%;
  background-color: darkcyan;
  margin: 10px;
`
const SkillTitle = styled.h3`
  color: #fff;
`
const SkillText = styled.p`
  color: #fff;
`
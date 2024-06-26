import SingleChoiceQuestion from "./SingleChoice";
import MultipleChoiceQuestion from "./MultipleChoice";
import TextQuestion from "./TextQuestion";
import React from "react";

export const renderQuestion = (question, index, deleteQuestion) => {
    switch (question.className) {
        case 'SingleChoice_Question':
            return <SingleChoiceQuestion key={question.id} id={question.id} number={index + 1}
                                         questionType={question.questionType} deleteQuestion={deleteQuestion}/>;
        case 'MultipleChoice_Question':
            return <MultipleChoiceQuestion key={question.id} id={question.id} number={index + 1}
                                           questionType={question.questionType} deleteQuestion={deleteQuestion}/>;
        case 'GapFilling_Question':
            return <TextQuestion key={question.id} id={question.id} number={index + 1}
                                 questionType={question.questionType} deleteQuestion={deleteQuestion}/>;
        default:
            return null;
    }
};
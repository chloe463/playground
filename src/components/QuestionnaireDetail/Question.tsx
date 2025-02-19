import { FragmentType, getFragmentData, graphql } from "../../__generated__/gql-masking";
import { QuestionType } from "../../__generated__/types";
import { TextArea } from "../../lib";
import { CheckboxOption, DropdownOptions, OptionComponent, RadioOption } from "./Option";
export const QUESTION_FRAGMENT = graphql(/* GraphQL */ `
  fragment QuestionFragment on Question {
    id
    type
    text
    options {
      ...OptionFragment
    }
  }
`);

type Props = {
  data: FragmentType<typeof QUESTION_FRAGMENT>;
};

export const QuestionComponent = (props: Props) => {
  const question = getFragmentData(QUESTION_FRAGMENT, props.data);
  return (
    <section className="p-4 -mx-4 rounded-md border border-black-alpha400 border-solid">
      <h3 className="font-heading text-heading3 font-semibold text-black-alpha800">
        {question.text}
      </h3>
      {question.type === QuestionType.Checkbox && (
        <ul className="mt-4 space-y-2">
          {question.options.map((option) => {
            if (!option) return null;
            const q = getFragmentData(OptionComponent.Fragment, option);
            return (
              <li key={q.id}>
                <CheckboxOption data={option} />
              </li>
            );
          })}
        </ul>
      )}
      {question.type === QuestionType.Radio && (
        <ul className="mt-4 space-y-2">
          {question.options.map((option) => {
            if (!option) return null;
            const q = getFragmentData(OptionComponent.Fragment, option);
            return (
              <li key={q.id}>
                <RadioOption data={option} />
              </li>
            );
          })}
        </ul>
      )}
      {question.type === QuestionType.Select && (
        <div className="mt-4">
          <DropdownOptions data={question.options} />
        </div>
      )}
      {question.type === QuestionType.Text && (
        <div className="mt-4">
          <TextArea label={question.text} name={question.text} value={""} />
        </div>
      )}
    </section>
  );
};
QuestionComponent.Fragment = QUESTION_FRAGMENT;

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RouteComponentProps } from "react-router";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { AppBase, transition } from "../../components/layout";
import { NewQuestionEditFormContainer } from "../../components/NewQuestionEditForm";
import { NewQuestionnaireFormContainer } from "../../components/NewQuestionnaireForm/NewQuestionnaireFormContainer";
import { PageHeader } from "../../components/PageHeader";
import { QuestionnaireListContainer } from "../../components/QuestionnaireListContainer";
import { PrimaryButton } from "../../lib/components/Button";
import { colors } from "../../lib/styles";

type Props = RouteComponentProps;

export const Crud: React.VFC<Props> = (props) => {
  const location = props.location;

  return (
    <AppBase
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/crud" exact={true} render={() => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={transition}
              > 
                <PageHeader title={"CRUD examples"}>
                  <ButtonPosition>
                    <RouterLink to="/crud/new">
                      <PrimaryButton type="button">
                        Create New
                      </PrimaryButton>
                    </RouterLink>
                  </ButtonPosition>
                </PageHeader>
                <Contents>
                  <QuestionnaireListContainer />
                </Contents>
              </motion.div>
            );
          }}>
          </Route>
          <Route path="/crud/new" render={() => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={transition}
              >
                <PageHeader title={"Create New Questionnaire"}></PageHeader>
                <LinkWrapper>
                  <Link to={"/crud"}>
                    Back to list
                  </Link>
                </LinkWrapper>
                <Contents>
                  <NewQuestionnaireFormContainer />
                </Contents>
              </motion.div>
            );
          }}>
          </Route>
          <Route path="/crud/:id/edit" render={() => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={transition}
              >
                <PageHeader title={"Edit a questionnaire"}></PageHeader>
                <LinkWrapper>
                  <Link to={"/crud"}>
                    Back to list
                  </Link>
                </LinkWrapper>
                <Contents>
                  <NewQuestionEditFormContainer />
                </Contents>
              </motion.div>
            );
          }}>
          </Route>
        </Switch>
      </AnimatePresence>
    </AppBase>
  );
};

const Contents = styled.div`
  margin-top: 36px;
  margin-bottom: 96px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  top: 0;
  right: 24px;
`;

const LinkWrapper = styled.div`
  margin-top: 16px;
  padding: 0 24px;
`;

const Link = styled(RouterLink)`
  font-size: 16px;
  line-height: 32px;
  font-weight: 500;
  color: ${colors.blackAlpha500};
  transition: all 200ms ease-out;
  &:hover, &:active {
    color: ${colors.blackAlpha700};
  }
  &:visited {
    color: ${colors.blackAlpha500};
  }
`;

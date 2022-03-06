import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RouteComponentProps } from "react-router";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import { appBaseStyle, transition } from "../../components/layout";
import { NewQuestionEditFormContainer } from "../../components/NewQuestionEditForm";
import { NewQuestionnaireFormContainer } from "../../components/NewQuestionnaireForm/NewQuestionnaireFormContainer";
import { PageHeader } from "../../components/PageHeader";
import { QuestionnaireListContainer } from "../../components/QuestionnaireListContainer";
import { PrimaryButton } from "../../lib/components/Button";

type Props = RouteComponentProps;

export const Crud: React.VFC<Props> = (props) => {
  const location = props.location;

  return (
    <motion.div
      className={appBaseStyle}
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
                  <div className="absolute top-0 right-6">
                    <RouterLink to="/crud/new">
                      <PrimaryButton type="button">
                        Create New
                      </PrimaryButton>
                    </RouterLink>
                  </div>
                </PageHeader>
                <div className="mt-9 mb-24">
                  <QuestionnaireListContainer />
                </div>
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
                <div className="mt-4 py-0 px-6">
                  <RouterLink
                    to={"/crud"}
                    className={`
                      text-body2 text-black-alpha500 transition-all duration-200 ease-out
                      hover:text-black-alpha700
                      active:text-black-alpha700
                      visited:text-black-alpha500
                    `}
                  >
                    Back to list
                  </RouterLink>
                </div>
                <div className="mt-9 mb-24">
                  <NewQuestionnaireFormContainer />
                </div>
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
                <div className="mt-4 py-0 px-6">
                  <RouterLink
                    to={"/crud"}
                    className={`
                      text-body2 text-black-alpha500 transition-all duration-200 ease-out
                      hover:text-black-alpha700
                      active:text-black-alpha700
                      visited:text-black-alpha500
                    `}
                  >
                    Back to list
                  </RouterLink>
                </div>
                <div className="mt-9 mb-24">
                  <NewQuestionEditFormContainer />
                </div>
              </motion.div>
            );
          }}>
          </Route>
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
};

import React from "react";
import { RouteComponentProps } from "react-router";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { AppBase, transition } from "../../components/layout";
import { PageHeader } from "../../components/PageHeader";
import { QuestionnaireListContainer } from "../../components/QuestionnaireListContainer";

type Props = RouteComponentProps;

export const Crud: React.VFC<Props> = (props) => {

  console.log({props})
  const location = props.location;
  const [_, rootPath] = location.pathname.split("/");

  const navigateToCreatePage = () => {
    props.history.push("/crud/new");
  };

  return (
    <AppBase
      initial={{ opacity: 1, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={transition}
    >
      <Switch location={location} key={rootPath}>
        <Route path="/crud" exact={true} render={() => {
          return (
            <> 
              <PageHeader title={"CRUD examples"}>
                <ButtonPosition>
                  <PrimaryButton type="button" onClick={() => navigateToCreatePage()}>
                    Create New
                  </PrimaryButton>
                </ButtonPosition>
              </PageHeader>
              <Contents>
                <QuestionnaireListContainer />
              </Contents>
            </>
          );
        }}>
        </Route>
        <Route path="/crud/new" render={() => {
          return (
            <>
              <PageHeader title={"Create New Questionnaire"}></PageHeader>
            </>
          );
        }}>
        </Route>
      </Switch>
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

const PrimaryButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 8px 24px;
  appearance: none;
  outline: none;
  border: none;
  background-color: #FF6D00;

  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 9999vmax;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.3, 0.3, 0.3, 1);
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
    &:after {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }

  &:active {
    &:after {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`;

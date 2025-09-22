export const signUpFormCrontrolls = [
  {
    id: "name",
    componentType: "input",
    placeholder: "Enter your name",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    componentType: "input",
    placeholder: "Enter your email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    componentType: "input",
    placeholder: "Enter your Password",
    label: "Password",
    type: "password",
  },
];

export const signInFormControlls = [
  {
    id: "email",
    componentType: "input",
    placeholder: "Enter your email",
    label: "Email",
    type: "email",
  },
  {
    id: "password",
    componentType: "input",
    placeholder: "Enter your Password",
    label: "Password",
    type: "password",
  },
];

export const scrumBoardOptions = [
  {
    id: "todo",
    label: "To DO",
  },
  {
    id: "inProgress",
    label: "In Progress",
  },
  {
    id: "blocked",
    label: "Blocked",
  },
  {
    id: "review",
    label: "Review",
  },
  {
    id: "done",
    label: "Done",
  },
];

export const addNewTaskFormControls = [
  {
    id: "title",
    type: "text",
    placeholder: "Enter title",
    label: "Title",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "status",
    placeholder: "Enter Status",
    label: "Status",
    componentType: "select",
    options: scrumBoardOptions,
  },
  {
    id: "priority",
    placeholder: "Enter priority",
    label: "Priority",
    componentType: "input",
    componentType: "select",
    options: [
      {
        id: "low",
        label: "Low",
      },
      {
        id: "medium",
        label: "Medium",
      },
      {
        id: "high",
        label: "High",
      },
    ],
  },
];

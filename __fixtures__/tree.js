const htmlTreeSource = {
  name: "html",
  type: "tag-internal",
  children: [
    {
      name: "body",
      type: "tag-internal",
      children: [
        {
          name: "h1",
          type: "tag-internal",
          children: [
            {
              name: "",
              type: "text",
              content: "Сообщество",
            },
          ],
        },
        {
          name: "p",
          type: "tag-internal",
          children: [
            {
              type: "text",
              content: "Общение между пользователями Хекслета",
            },
          ],
        },
        {
          name: "hr",
          type: "tag-leaf",
        },
        {
          name: "input",
          type: "tag-leaf",
        },
        {
          name: "div",
          type: "tag-internal",
          className: "hexlet-community",
          children: [
            {
              name: "div",
              type: "tag-internal",
              className: "text-xs-center",
              children: [],
            },
            {
              name: "div",
              type: "tag-internal",
              className: "fa fa-spinner",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const htmlTree = {
  name: "html",
  type: "tag-internal",
  children: [
    {
      name: "body",
      type: "tag-internal",
      children: [
        {
          name: "h1",
          type: "tag-internal",
          children: [
            {
              name: "",
              type: "text",
              content: "Сообщество",
            },
          ],
        },
        {
          name: "p",
          type: "tag-internal",
          children: [
            {
              type: "text",
              content: "Общение между пользователями Хекслета",
            },
          ],
        },
        {
          name: "hr",
          type: "tag-leaf",
        },
        {
          name: "input",
          type: "tag-leaf",
        },
        {
          name: "div",
          type: "tag-internal",
          className: "new-class",
          children: [
            {
              name: "div",
              type: "tag-internal",
              className: "text-xs-center",
              children: [],
            },
            {
              name: "div",
              type: "tag-internal",
              className: "fa fa-spinner",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

module.exports = {
  htmlTreeSource,
  htmlTree,
  classNameFrom: "hexlet-community",
  classNameTo: "new-class",
};

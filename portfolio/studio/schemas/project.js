export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: 'projectImage',
            title: 'Project Image',
            type: 'image',
        },

        {
            name: "title",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "frameworks",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "school", title: "School"}
                ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            } // tags are added within the sanity studio
        }
    ]
}
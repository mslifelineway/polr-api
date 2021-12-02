import { ButtonElement, SelectElement } from "../components";

export const linksData = {
  columns: [
    {
      field: "linkEnding",
      headerName: "Link Ending",
      width: 250,
      editable: true,
    },
    {
      field: "longLink",
      headerName: "Long Link",
      width: 250,
      editable: true,
    },
    {
      field: "clicks",
      headerName: "Clicks",
      type: "number",
      width: 150,
      editable: true,
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 250,
      editable: true,
      sortable: false,
    },
  ],
  rows: [
    {
      id: 1,
      linkEnding: "Snow",
      longLink: "Jon",
      clicks: 35,
      date: "02/12/2021",
    },
    {
      id: 2,
      linkEnding: "Lannister",
      longLink: "Cersei",
      clicks: 42,
      date: "02/12/2021",
    },
    {
      id: 3,
      linkEnding: "Lannister",
      longLink: "Jaime",
      clicks: 45,
      date: "02/12/2021",
    },
    {
      id: 4,
      linkEnding: "Stark",
      longLink: "Arya",
      clicks: 16,
      date: "02/12/2021",
    },
    {
      id: 5,
      linkEnding: "Targaryen",
      longLink: "Daenerys",
      clicks: 50,
      date: "02/12/2021",
    },
    {
      id: 6,
      linkEnding: "Melisandre",
      longLink: null,
      clicks: 15,
      date: "02/12/2021",
    },
    {
      id: 7,
      linkEnding: "Clifford",
      longLink: "Ferrara",
      clicks: 44,
      date: "02/12/2021",
    },
    {
      id: 8,
      linkEnding: "Frances",
      longLink: "Rossini",
      clicks: 36,
      date: "02/12/2021",
    },
    {
      id: 9,
      linkEnding: "Roxie",
      longLink: "Harvey",
      clicks: 65,
      date: "02/12/2021",
    },
  ],
};

export const adminLinksData = {
  columns: [
    {
      field: "linkEnding",
      headerName: "Link Ending",
      width: 250,
      editable: true,
    },
    {
      field: "longLink",
      headerName: "Long Link",
      width: 250,
      editable: true,
    },
    {
      field: "clicks",
      headerName: "Clicks",
      type: "number",
      width: 150,
      editable: true,
      align: "center",
    },
    {
      field: "date",
      headerName: "Date",
      width: 120,
      editable: true,
    },
    {
      field: "creator",
      headerName: "Creator",
      width: 200,
      editable: true,
    },
    {
      field: "disable",
      headerName: "Disable",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <ButtonElement
          text="Disable"
          color="secondary"
          size="small"
          style={{ fontSize: ".8rem", width: "fit-content" }}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <ButtonElement
          text="Delete"
          color="secondary"
          size="small"
          style={{
            fontSize: ".8rem",
            width: "fit-content",
            background: "#f47c3c",
          }}
        />
      ),
    },
  ],
  rows: [
    {
      id: 1,
      linkEnding: "Snow",
      longLink: "Jon",
      clicks: 35,
      date: "02/12/2021",
      disable: "Disable",
      delete: "Delete",
    },
    {
      id: 2,
      linkEnding: "Lannister",
      longLink: "Cersei",
      clicks: 42,
      date: "02/12/2021",
    },
    {
      id: 3,
      linkEnding: "Lannister",
      longLink: "Jaime",
      clicks: 45,
      date: "02/12/2021",
    },
    {
      id: 4,
      linkEnding: "Stark",
      longLink: "Arya",
      clicks: 16,
      date: "02/12/2021",
    },
    {
      id: 5,
      linkEnding: "Targaryen",
      longLink: "Daenerys",
      clicks: 50,
      date: "02/12/2021",
    },
    {
      id: 6,
      linkEnding: "Melisandre",
      longLink: null,
      clicks: 15,
      date: "02/12/2021",
    },
    {
      id: 7,
      linkEnding: "Clifford",
      longLink: "Ferrara",
      clicks: 44,
      date: "02/12/2021",
    },
    {
      id: 8,
      linkEnding: "Frances",
      longLink: "Rossini",
      clicks: 36,
      date: "02/12/2021",
    },
    {
      id: 9,
      linkEnding: "Roxie",
      longLink: "Harvey",
      clicks: 65,
      date: "02/12/2021",
    },
  ],
};

export const adminUsersData = {
  columns: [
    {
      field: "username",
      headerName: "Username",
      width: 250,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      editable: true,
    },
    {
      field: "activated",
      headerName: "Activated",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <ButtonElement
          text="Active"
          color="primary"
          size="small"
          style={{
            fontSize: ".8rem",
            width: "fit-content",
            background: "#93c54b",
          }}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "api",
      headerName: "API",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <ButtonElement
          text="API INFO"
          color="primary"
          size="small"
          style={{ fontSize: ".8rem", width: "fit-content" }}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      editable: true,
      sortable: false,
      renderCell: (params) => (
        <SelectElement
          id="role"
          value="Active"
          onChange={() => {}}
          options={["Active", "Default"]}
          style={{ height: 50, marginTop: 10 }}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <ButtonElement
          text="Delete"
          color="secondary"
          size="small"
          style={{
            fontSize: ".8rem",
            width: "fit-content",
            background: "#f47c3c",
          }}
        />
      ),
    },
  ],
  rows: [
    {
      id: 1,
      username: "Snow",
      email: "Jon",
      createdAt: "02/12/2021",
      activated: "Active",
      api: "299i82ajhsjj",
      role: "Admin",
    },
    {
      id: 2,
      username: "Lannister",
      email: "Cersei",
      createdAt: "02/12/2021",
      activated: "Active",
    },
    {
      id: 3,
      username: "Lannister",
      email: "Jaime",
      createdAt: "02/12/2021",
      api: "299i82ajhsjj",
    },
    {
      id: 4,
      username: "Stark",
      email: "Arya",
      createdAt: "02/12/2021",
      role: "Admin",
    },
  ],
};

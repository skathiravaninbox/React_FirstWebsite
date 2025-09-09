import React from 'react'

const tableHeading = [
    {
        colName: "Avatar",
        icon: "👤",
    },
    {
        colName: "Name",
        icon: "📛",
    },
    {
        colName: "Status",
        icon: "✅",
    },
];

const tableData = [
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9ltx1TUR1HzDgCA8oLzCKQOBxZ55dj0Q-qrWGdNBbLb5Vvi8NE4UDIFYI4sA121852I&usqp=CAU",
        name: "Alice",
        status: "Active",
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9ltx1TUR1HzDgCA8oLzCKQOBxZ55dj0Q-qrWGdNBbLb5Vvi8NE4UDIFYI4sA121852I&usqp=CAU",
        name: "Bob",
        status: "Inactive",
    },
]
const TableSection = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className='text-2xl font-bold mb-4'>📊User Data</h2>
            <table className='min-w-full  border border-collapse'>
                <thead>
                    <tr>
                        {tableHeading.map((heading) => (
                            <th key={heading.colName}
                                className='bg-gray-300 border border-gray-400 px-4 py-2'>
                                {heading.icon} {heading.colName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((user,index) => (
                        <tr key={index}>
                            <td className='border border-gray-300 px-4 py-2'>
                                <img 
                                width={50}
                                height={50}
                                src={user.avatar}
                                alt="User Avatar"
                                />
                            </td>
                            <td className='border border-gray-300 px-4 py-2'>
                                {user.name}
                            </td>
                            <td className={`border border-gray-300 px-4 py-2
                                ${user.status=="Active"?`text-green-600`:`text-red-600`}`
                            }>
                                {user.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSection;
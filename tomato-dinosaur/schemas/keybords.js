
export default {
    name: 'keybords',
    title: 'keybords',
    type: 'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of: [{type:'image'}],
            option:{
                hotspot:true,
            }
        },{
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 200,
            },
          },
        {name:'price',
        title:'Price',
        type:'number',
         },
         {
         name: 'details',
         title:'Details',
         type:'string',
         }
    ]
}
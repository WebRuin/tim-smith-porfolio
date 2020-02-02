export default {
  name: "recent-work",
  title: "Recent Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "link",
      title: "Link",
      type: "url"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "desktopImage",
      title: "Desktop mage",
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "desktopImageForMobile",
      title: "Desktop Image For Mobile",
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "mobileImageForMobile",
      title: "Mobile Image For Mobile",
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }]
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};

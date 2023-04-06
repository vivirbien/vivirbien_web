import { contentfulClient } from '../plugins/contentful';

const fetchBlogPosts = async (contentTypeId) => {
    try {
        const response = await contentfulClient.getEntries({
        content_type: contentTypeId,
        order: '-sys.createdAt',
        });

        const blogPosts = response.items.map((post) => {
        return {
            id: post.sys.id,
            slug: post.fields.postSlug,
            date: post.fields.postDate,
            image: post.fields.postImage,
            meta: post.fields.postMeta,
            description: post.fields.postDescription,
            title: post.fields.postTitle,
            content: post.fields.postBody,
            // Añade aquí otros campos que desees extraer de tus blog posts
        };
        });

        return blogPosts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

const fetchSingleEntry = async (entryId) => {
    try {
        const response = await contentfulClient.getEntry(entryId);

        const singleEntry = {
        id: response.sys.id,
        date: response.fields.postDate,
        image: response.fields.postImage,
        meta: response.fields.postMeta,
        description: response.fields.postDescription,
        title: response.fields.postTitle,
        content: response.fields.postBody,
        // Añade aquí otros campos que desees extraer de la entrada
        };

        return singleEntry;
    } catch (error) {
        console.error('Error fetching single entry:', error);
        return null;
    }
}  

export default { fetchBlogPosts, fetchSingleEntry }
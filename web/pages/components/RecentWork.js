import Link from 'next/link';
import groq from 'groq';
import client from '../../client';

import RecentWorkArticle from './RecentWorkArticle';

import '../scss/recent-work.scss';

import '../scss/global.scss';

function RecentWork(props) {
  const { recentWork = [] } = props;
  return (
    <section id="recent-work" class="recent-work">
      <h4 class="section-header">Recent Work</h4>
      {recentWork.map(
        ({
          _id,
          title = '',
          link = '',
          slug = '',
          desktopImage = '',
          mobileImage = '',
          desktopImageForMobile = '',
          mobileImageForMobile = '',
          tags = [],
          _updatedAt = ''
        }) =>
          slug && (
            <>
              <li key={_id}>
                <Link prefetch href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>

              <RecentWorkArticle
                id={_id}
                title={title}
                link={link}
                slug={slug}
                desktopImage={desktopImage}
                mobileImage={mobileImage}
                desktopImageForMobile={desktopImageForMobile}
                mobileImageForMobile={mobileImageForMobile}
                tags={tags}
                updatedAt={_updatedAt}
              />
            </>
          )
      )}
    </section>
  );
}

RecentWork.getInitialProps = async () => ({
  recentWork: await client.fetch(groq`
    *[_type == "recentWork" && publishedAt < now()]|order(publishedAt desc)
  `)
});

export default RecentWork;

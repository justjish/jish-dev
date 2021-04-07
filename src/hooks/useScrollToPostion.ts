import { config, useSpring } from 'react-spring';
/**
 * EXPERIMENTAL
 *
 * Using React-Spring to handle 'scrollTo' smoothly.
 * Polyfill for Safari made this not needed for release,
 * however it can be expanded upon to provide a customized
 * scrollTo expierence.
 *
 * @returns {scrollToTarget}
 */
export const useScrollToPosition = () => {
  const [{ y }, yRef] = useSpring({ y: 0 }, []);

  let isStopped = false;
  const onWheel = () => {
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  };

  const scrollToTarget = (to: number) => {
    const value = to;
    window.addEventListener('wheel', onWheel);
    yRef.update({
      y: value,
      reset: true,
      from: { y: 0 },
      onRest: () => {
        isStopped = false;
        window.removeEventListener('wheel', onWheel);
      },
      onChange: ({ y }) => {
        if (!isStopped) {
          window.scrollTo(0, y);
        }
      },
      config: config.molasses,
    });
  };

  return { scrollToTarget };
};

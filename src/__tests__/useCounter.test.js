import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "../useCounter";

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
});

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("should match snapshot", () => {
  const { result } = renderHook(() => useCounter());

  expect(result).toMatchSnapshot();

  act(() => {
    result.current.increment();
  });

  expect(result).toMatchSnapshot();
});

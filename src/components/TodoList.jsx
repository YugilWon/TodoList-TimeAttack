function TodoList({ todos, setTodo }) {
  const doneTodo = todos.filter((item) => item.isDone);
  const workingTodo = todos.filter((item) => !item.isDone);

  const deleteBtnHandler = (id) => {
    const updatedTodo = todos.filter((item) => item.id !== id);

    setTodo(updatedTodo);
  };

  const cancelBtnHandler = (id) => {
    setTodo((beforeTodo) => {
      return beforeTodo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: false };
        }
        return item;
      });
    });
  };

  const doneBtnHandler = (id) => {
    setTodo((beforeTodo) => {
      return beforeTodo.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: true };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="TODO-Container">
        <div className="working-Container">
          <h2>Working...</h2>
          {workingTodo.map((item) => (
            <div className="TODO-Box" key={item.id}>
              <h2>{item.title}</h2>
              {item.content}
              <div className="Button-Container">
                <button
                  className="deleteBtn"
                  onClick={() => deleteBtnHandler(item.id)}
                >
                  삭제하기
                </button>
                {item.isDone ? (
                  <button
                    className="cancelBtn"
                    onClick={() => cancelBtnHandler(item.id)}
                  >
                    취소하기
                  </button>
                ) : (
                  <button
                    className="doneBtn"
                    onClick={() => doneBtnHandler(item.id)}
                  >
                    완료하기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="Done-Container">
          <h2>Done...</h2>
          {doneTodo.map((item) => (
            <div className="TODO-Box" key={item.id}>
              <h2>{item.title}</h2>
              {item.content}
              <div className="Button-Container">
                <button
                  className="deleteBtn"
                  onClick={() => deleteBtnHandler(item.id)}
                >
                  삭제하기
                </button>
                {item.isDone ? (
                  <button
                    className="cancelBtn"
                    onClick={() => cancelBtnHandler(item.id)}
                  >
                    취소하기
                  </button>
                ) : (
                  <button
                    className="doneBtn"
                    onClick={() => doneBtnHandler(item.id)}
                  >
                    완료하기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;

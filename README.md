# Node.js

Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임입니다. Node.js는 이벤트 기반, 논블로킹I/O 모델을 사용해 가볍고 효율적입니다. Node.js의 패키지 생태계인 npm은 세계에서 가장 큰 오픈 소스 라이브러리 생태계이기도 합니다. 노드는 서버로만 사용되는 것이 아닙니다.

* ## 서버

  - 서버는 네트워크를 통해 클라이언트에 정보나 서비스를 제공하는 컴퓨터 or 프로그램을 말합니다. 클라이언트란 요청을 보내는 주체로, 브라우저일 수도 있고, 데스크톱 프로그램일 수도 있고, 모바일 앱일 수도 있고, 다른 서버에 요청을 보내는 서버일 수도 있습니다.
  - 노드는 서버 애플리케이션을 실행하는 데 제일 많이 사용됩니다.



* ## 자바스크립트 런타임

  * 노드는 자바스크립트 런타임입니다. 런타임은 특정 언어로 만든 프로그램들을 실행할 수 있는 환경을 뜻합니다. 따라서 노드는 자바스크립트 프로그램을 컴퓨터에서 실행할 수 있게 해줍니다. 기존에는 자바스크립트 프로그램을 인터넷 브라우저(브라우저도 자바스크립트 런타임입니다.) 위에서만 실행할 수 있었습니다. 브라우저 외의 환경에서 자바스크립트를 실행하기 위한 여러 가지 시도가 있었으나, 자바스크립트의 실행 속도 문제 때문에 모두 큰 호응을 얻지는 못했습니다.
  * 노드는 V8과 더불어 libuv라는 라이브러리를 사용합니다. V8과 libuv는 C와 C++로 구현되어 있습니다. 자바스크립트 코드는 노드가 알아서 V8과 libuv에 연결해주므로 노드를 사용할 때 C와 C++ 몰라도 됩니다. libuv 라이브러리는 노드의 특성인 이벤트 기반, 논블로킹I/O 모델을 구현하고 있습니다. 노드는 스스로를 이벤트 기반, 논블로킹I/O 모델을 사용해 가볍고 효율적으로 표현했습니다.



* ## 이벤트 기반

  * 이벤트 기반 (event-driven)이란 이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식을 의미합니다. 이벤트로는 클릭이나 네트워크 요청 등이 있을 수 있습니다.
  * 이벤트 기반 시스템에서는 **특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두어야 합니다.** 이것을 **이벤트 리스터(event listener)에 콜백(callback) 함수를 등록한다고 표현합니다.**
  * 노드도 이벤트 기반 방식으로 동작하므로 이벤트가 발생하면 이벤트 리스너에 등록해둔 콜백 함수를 호출합니다. 발생한 이벤트가 없거나 발생했던 이벤트를 다 처리하면 노드는 다음 이벤트가 발생할 때까지 대기합니다.
  * 이벤트 기반 모델에서는 이벤트 루프라는 개념이 있습니다. 여러 이벤트가 동시에 발생했을 때 어떤 순서로 콜백 함수를 호출할지를 이벤트 루프가 판단합니다.
    * **이벤트 루프 :** 이벤트 발생 시 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당합니다. 노드가 종료될 때까지 이벤트 처리를 위한 작업을 반복하므로 루프라고 불립니다.
    * **태스크 큐 :** 이벤트 발생 후 호출되어야 할 콜백 함수들이 기다리는 공간입니다. 콜백들이 이벤트 루프가 정한 순서대로 줄을 서 있으므로 콜백 큐라고도 부릅니다.
    * **백그라운드 :** 타이머나 I/O 작업 콜백 or 이벤트 리스너들이 대기하는 곳입니다.



* ## 논블로킹 I/O

  * 논블로킹이란 이전 작업이 완료될 때까지 멈추지 않고 다음 작업을 수행함을 뜻합니다.

  * 블로킹보다 논블로킹 방식이 같은 작업을 더 짧은 시간 동안 처리할 수 있음을 알 수 있습니다. 하지만 싱글 스레드라는 한계 때문에 자바스크립트의 모든 코드가 이 방식으로 시간적 이들을 볼 수 있는 것은 아닙니다. 현재 노드 프로세스 외의 다른 컴퓨팅 자원을 사용할 수 있는 I/O 작업이 주로 시간적 이득을 많이 봅니다.

  * I/O는 입력(Input)/출력(Output)을 의미합니다. 파일 시스템 접근(파일 읽기, 쓰기, 폴더 만들기 등)이나 네트워크 요청 같은 작업이 I/O의 일종입니다. 이러한 작업을 할 때 노드는 논블로킹 방식으로 동작합니다.

  * 블로킹과 논블로킹 말고도 동기와 비동기라는 개념에 대해서도 들어보았을 것입니다.

    * **블로킹 방식의 예제 코드 입니다.**

      ````
      function longRunningTask() {
      	// 오래 걸리는 작업
      	console.log('작업 끝');
      }
      console.log('시작');
      longRunningTask();
      console.log('다음 작업');
      
      //결과
      시작
      작업 끝
      다음 작업
      ````

    * **논블로킹 방식의 예제 코드 입니다.**

      ````
      function longRunningTask() {
      	// 오래 걸리는 작업
      	console.log('작업 끝');
      }
      console.log('시작');
      setTimeout(longRunningTask, 0);
      console.log('다음 작업');
      
      //결과
      시작
      다음 작업
      작업 끝
      ````

      - setTimeout(콜백, 0)은 코드를 논블로킹으로 만들기 위해 사용하는 기법 중 하나입니다. 노드에서는 setTimeout(콜백, 0) 대신 다른 방식을 주로 사용합니다



* ## 싱글 스레드

  * 스레드란 컴퓨터 작업을 처리할 수 있는 일손이라고 생각하면 됩니다. 노드는 싱글 스레드이므로 주어진 작업을 혼자서 처리해야 합니다. 반대로 멀티 스레드인 시스템에서는 여러 개의 스레드가 일을 나눠서 처리할 수 있습니다.
  * 자바스크립트와 노드에서 논블로킹이 중요한 이유는 바로 싱글 스레드이기 때문입니다. 한 번에 한 가지 일밖에 처리하지 못하므로 어떠한 작업에서 블로킹이 발생하면 다음 일을 처리하지 못합니다. 노드도 싱글 스레드 여러 개를 사용해 멀티 스레딩과 비슷한 기능을 할 수 있습니다. 하지만 엄밀히 말하면 멀티 스레딩이라기보다는 멀티 프로세싱에 가깝습니다.
    * **프로세스와 스레드의 차이**
      * 프로세스는 운영체제에서 할당하는 작업의 단위입니다. 노드나 인터넷 브라우저 같은 프로그램은 개별적인 프로세스입니다. 프로세스 간에는 메모리 등의 자원을 공유하지 않습니다.
      * 스레드는 프로세스 내에서 실행되는 흐름의 단위입니다. 하나의 프로세스는 스레드를 여러개 가질 수 있습니다. 스레드들은 부모 프로세스의 자원을 공유합니다. 즉, 같은 메모리에 접근할 수 있습니다.


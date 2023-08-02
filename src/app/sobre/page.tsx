'use client'
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Button, Timeline } from 'flowbite-react';

export default function galeria() {

  return (
    <>
      <Menu />
      <div className="flex flex-col bg-gray-800 justify-center items-center">
        <div className="flex items-center justify-center my-20 p-10">
          <h1 className=" font-bold text-3xl text-white">Sobre</h1>
        </div>
      </div>

      <div className="my-10 mx-10">
        <div className="flex flex-col my-20">


          <div>
            <p className=" text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis ut, tenetur tempore dolores modi illo vitae odio eaque molestias, officiis nam, ea repellat ullam inventore. Soluta libero distinctio a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi ipsa sunt cumque repellendus quaerat consequatur nihil suscipit aliquid, possimus sint quis, in nulla. Dolor doloremque sed consequatur voluptates laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque est facilis ullam cumque excepturi velit adipisci quis, alias ea! Qui accusamus porro dolor labore eum! Consectetur illum in maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint enim perspiciatis nisi est! Nihil doloremque quas maxime recusandae sint, quam rerum, sit ex possimus soluta rem dolore placeat ipsum ratione? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perferendis dolorem ratione nam commodi soluta numquam exercitationem ex dolor! Minus repellendus iusto porro illo quisquam sapiente similique at eius vel! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, dicta nihil. Dolores labore unde quos ipsam illum ad corrupti assumenda quibusdam distinctio suscipit sequi vel ex, minima harum aliquam minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum hic culpa molestiae iure fugit veniam facilis corrupti deleniti voluptate totam autem odio magnam vero nihil nostrum, debitis dignissimos impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolorum odit consectetur quidem, voluptatem, quos soluta facilis eveniet praesentium debitis nam quae aliquid quibusdam quasi. Doloremque amet dolore ipsa dicta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium doloremque maxime delectus perspiciatis voluptate illum ipsam ipsa nemo aliquid molestias quia, quibusdam voluptas? Sunt autem optio quis quo iste? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae consequuntur possimus, mollitia magnam nihil porro nesciunt quod id ab placeat dolor accusantium officia nisi accusamus. Aspernatur sint porro laborum corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt odio in esse explicabo quo quaerat quae sed. Alias exercitationem voluptate cum a reiciendis, voluptas quia enim. Placeat nam consectetur laudantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eos culpa autem iusto. Tempora corporis qui asperiores impedit et eum nemo, perspiciatis dignissimos, cum quis possimus neque aperiam voluptatum provident.</p>

          </div>

          <div className="py-10">
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>
                    February 2022
                  </Timeline.Time>
                  <Timeline.Title>
                    Application UI code in Tailwind CSS
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                      E-commerce & Marketing pages.
                    </p>
                  </Timeline.Body>
                  <Button color="gray">
                    <p>
                      Learn More
                    </p>

                  </Button>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>
                    March 2022
                  </Timeline.Time>
                  <Timeline.Title>
                    Marketing UI design in Figma
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      All of the pages and components are first designed in Figma and we keep a parity between the two versions even
                      as we update the project.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time>
                    April 2022
                  </Timeline.Time>
                  <Timeline.Title>
                    E-Commerce UI code in Tailwind CSS
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
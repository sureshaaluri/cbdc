# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/suresh/CBDC/opencbdc-tx

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/suresh/CBDC/opencbdc-tx/build

# Include any dependencies generated for this target.
include src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/depend.make

# Include the progress variables for this target.
include src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/progress.make

# Include the compile flags for this target's objects.
include src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.o: ../src/uhs/twophase/coordinator/format.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/format.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/format.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/format.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/format.cpp > CMakeFiles/coordinator.dir/format.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/format.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/format.cpp -o CMakeFiles/coordinator.dir/format.s

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.o: ../src/uhs/twophase/coordinator/state_machine.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/state_machine.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/state_machine.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/state_machine.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/state_machine.cpp > CMakeFiles/coordinator.dir/state_machine.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/state_machine.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/state_machine.cpp -o CMakeFiles/coordinator.dir/state_machine.s

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.o: ../src/uhs/twophase/coordinator/client.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/client.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/client.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/client.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/client.cpp > CMakeFiles/coordinator.dir/client.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/client.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/client.cpp -o CMakeFiles/coordinator.dir/client.s

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.o: ../src/uhs/twophase/coordinator/distributed_tx.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/distributed_tx.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/distributed_tx.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/distributed_tx.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/distributed_tx.cpp > CMakeFiles/coordinator.dir/distributed_tx.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/distributed_tx.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/distributed_tx.cpp -o CMakeFiles/coordinator.dir/distributed_tx.s

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.o: ../src/uhs/twophase/coordinator/controller.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/controller.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/controller.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/controller.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/controller.cpp > CMakeFiles/coordinator.dir/controller.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/controller.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/controller.cpp -o CMakeFiles/coordinator.dir/controller.s

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.o: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/flags.make
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.o: ../src/uhs/twophase/coordinator/server.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/coordinator.dir/server.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/server.cpp

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/coordinator.dir/server.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/server.cpp > CMakeFiles/coordinator.dir/server.i

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/coordinator.dir/server.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator/server.cpp -o CMakeFiles/coordinator.dir/server.s

# Object files for target coordinator
coordinator_OBJECTS = \
"CMakeFiles/coordinator.dir/format.o" \
"CMakeFiles/coordinator.dir/state_machine.o" \
"CMakeFiles/coordinator.dir/client.o" \
"CMakeFiles/coordinator.dir/distributed_tx.o" \
"CMakeFiles/coordinator.dir/controller.o" \
"CMakeFiles/coordinator.dir/server.o"

# External object files for target coordinator
coordinator_EXTERNAL_OBJECTS =

src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/format.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/state_machine.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/client.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/distributed_tx.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/controller.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/server.o
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/build.make
src/uhs/twophase/coordinator/libcoordinator.a: src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Linking CXX static library libcoordinator.a"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && $(CMAKE_COMMAND) -P CMakeFiles/coordinator.dir/cmake_clean_target.cmake
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/coordinator.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/build: src/uhs/twophase/coordinator/libcoordinator.a

.PHONY : src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/build

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/clean:
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator && $(CMAKE_COMMAND) -P CMakeFiles/coordinator.dir/cmake_clean.cmake
.PHONY : src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/clean

src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/depend:
	cd /home/suresh/CBDC/opencbdc-tx/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/suresh/CBDC/opencbdc-tx /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/coordinator /home/suresh/CBDC/opencbdc-tx/build /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/uhs/twophase/coordinator/CMakeFiles/coordinator.dir/depend

